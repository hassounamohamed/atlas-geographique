import { IconSymbol } from '@/components/ui/icon-symbol';
import { COUNTRIES } from '@/constants/countries';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function CountryDetailPage() {
  const params = useLocalSearchParams<{ id?: string }>();
  const router = useRouter();
  const id = params.id;
  const country = COUNTRIES.find((c) => c.id === id);

  if (!country) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.appBar}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol name="chevron.left" size={20} color="#0f172a" />
          </Pressable>
          <Text style={styles.title}>Pays</Text>
        </View>
        <View style={styles.center}>
          <Text>Pays introuvable.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
        <Text style={styles.title}>{country.name}</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={country.image} style={styles.flag} resizeMode="cover" />

        <View style={styles.card}>
          <Row icon="building" label={country.capital} hint="Capitale" />
          <Row icon="person.3" label={country.population + " d'habitants"} hint="Population" />
          <Row icon="ruler" label={country.area} hint="Superficie" />
          <Row icon="globe" label={country.languages} hint="Langue(s) officielle(s)" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Row({ icon, label, hint }: { icon: string; label: string; hint?: string }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        <View style={styles.iconBox}>
          <Text style={styles.iconText}>{getIconEmoji(icon)}</Text>
        </View>
        <Text style={styles.rowLabel}>{label}</Text>
      </View>
      {hint ? <Text style={styles.rowHint}>{hint}</Text> : null}
    </View>
  );
}

function getIconEmoji(icon: string): string {
  const iconMap: Record<string, string> = {
    'building': '🏛️',
    'person.3': '👥',
    'ruler': '📏',
    'globe': '🗣️'
  };
  return iconMap[icon] || '📍';
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  appBar: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e6e6e6' },
  backButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 24, color: '#0f172a' },
  title: { fontSize: 18, fontWeight: '700', textAlign: 'center', flex: 1 },
  content: { padding: 16 },
  flag: { width: width - 32, height: 200, borderRadius: 12, backgroundColor: '#e6eef6' },
  card: { marginTop: 16, backgroundColor: '#fff', borderRadius: 12, padding: 12, shadowColor: '#000', shadowOpacity: 0.03, shadowOffset: { width: 0, height: 2 }, elevation: 1 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 16, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e5e7eb' },
  rowLeft: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  iconBox: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  iconText: { fontSize: 20 },
  rowLabel: { fontSize: 16, fontWeight: '500', color: '#0f172a', flex: 1 },
  rowHint: { fontSize: 14, color: '#0acd10ff', marginLeft: 8 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
