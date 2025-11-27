import { IconSymbol } from '@/components/ui/icon-symbol';
import { COUNTRIES } from '@/constants/countries';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Alert,
  Animated,
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

type Country = {
  id: string;
  name: string;
  image: any;
};

// countries list is imported from constants/countries

const DRAWER_WIDTH = Math.min(width * 0.75, 320);

export default function CountriesPage() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const anim = useRef(new Animated.Value(-DRAWER_WIDTH)).current;

  function toggleDrawer(open?: boolean) {
    const nextState = open === undefined ? !drawerOpen : open;
    const x = nextState ? 0 : -DRAWER_WIDTH;
    Animated.timing(anim, { toValue: x, duration: 240, useNativeDriver: true }).start();
    setDrawerOpen(nextState);
  }

  function navigateHome() {
    setDrawerOpen(false);
    Animated.timing(anim, { toValue: -DRAWER_WIDTH, duration: 240, useNativeDriver: true }).start(() => {
      router.replace('/WelcomePage');
    });
  }

  function navigateAbout() {
    setDrawerOpen(false);
    Animated.timing(anim, { toValue: -DRAWER_WIDTH, duration: 240, useNativeDriver: true }).start(() => {
      router.push('/about');
    });
  }

  function handleQuit() {
    setDrawerOpen(false);
    Animated.timing(anim, { toValue: -DRAWER_WIDTH, duration: 240, useNativeDriver: true }).start(() => {
      Alert.alert('Quitter', 'Voulez-vous quitter l\'application ?', [
        { text: 'Annuler', style: 'cancel' },
        { text: 'Quitter', style: 'destructive', onPress: () => {
          BackHandler.exitApp();
        }},
      ]);
    });
  }
  function renderItem({ item }: { item: Country }) {
    return (
      <Pressable style={styles.tile} onPress={() => router.push(`/CountryDetailPage?id=${item.id}`)}>
        <View style={styles.tileLeft}>
          <Image source={item.image} style={styles.flag} />
          <Text style={styles.countryName}>{item.name}</Text>
        </View>
        <IconSymbol name="chevron.right" size={20} color="#9ca3af" />
      </Pressable>
    );
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Pressable 
          onPress={() => toggleDrawer(true)} 
          style={({ pressed }) => [
            styles.hamburger,
            pressed && { backgroundColor: '#f1f5f9' }
          ]}
        >
          <Text style={styles.hamburgerIcon}>☰</Text>
        </Pressable>
        <Text style={styles.title}>Liste des Pays</Text>
      </View>

      <FlatList
        data={COUNTRIES}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
        contentContainerStyle={styles.list}
      />

      <Animated.View 
        style={[styles.drawer, { transform: [{ translateX: anim }] }]}
        pointerEvents={drawerOpen ? 'auto' : 'none'}
      >
        <View style={styles.drawerHeader}>
          <Image source={require('@/assets/images/icon.png')} style={styles.drawerIcon} />
          <Text style={styles.drawerTitle}>Atlas</Text>
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.drawerItem,
            pressed && { backgroundColor: '#e5e7eb' }
          ]} 
          onPress={navigateHome}
        >
          <IconSymbol name="house" size={20} color="#0f172a" />
          <Text style={styles.drawerItemText}>Accueil</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.drawerItem,
            pressed && { backgroundColor: '#e5e7eb' }
          ]} 
          onPress={navigateAbout}
        >
          <IconSymbol name="info.circle" size={20} color="#0f172a" />
          <Text style={styles.drawerItemText}>À propos</Text>
        </Pressable>

        <Pressable 
          style={({ pressed }) => [
            styles.drawerItem,
            pressed && { backgroundColor: '#e5e7eb' }
          ]} 
          onPress={handleQuit}
        >
          <IconSymbol name="xmark" size={20} color="#0f172a" />
          <Text style={styles.drawerItemText}>Quitter</Text>
        </Pressable>
      </Animated.View>

      {drawerOpen && <Pressable style={styles.scrim} onPress={() => toggleDrawer(false)} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  appBar: { height: 56, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e6e6e6' },
  hamburger: { width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 8, borderWidth: 1, borderColor: '#e5e7eb' },
  hamburgerIcon: { fontSize: 24, color: '#0f172a', fontWeight: '600' },
  title: { fontSize: 18, fontWeight: '700', marginLeft: 6 },
  list: { padding: 12 },
  tile: { backgroundColor: '#fff', padding: 12, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, shadowColor: '#000', shadowOpacity: 0.03, shadowOffset: { width: 0, height: 2 }, elevation: 1 },
  tileLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  flag: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#e6eef6' },
  countryName: { fontSize: 16, fontWeight: '600' },
  drawer: { position: 'absolute', left: 0, top: 0, bottom: 0, width: DRAWER_WIDTH, backgroundColor: '#ffffff', paddingTop: 48, paddingHorizontal: 12, shadowColor: '#000', shadowOffset: { width: 2, height: 0 }, shadowOpacity: 0.25, shadowRadius: 8, elevation: 10, zIndex: 1000 },
  drawerHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  drawerIcon: { width: 48, height: 48, borderRadius: 10 },
  drawerTitle: { fontSize: 18, fontWeight: '700' },
  drawerItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12, paddingHorizontal: 8, borderRadius: 8 },
  drawerItemText: { fontSize: 16 },
  scrim: { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: '#00000066', zIndex: 999 },
});
