import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function AboutPage() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <IconSymbol name="chevron.left" size={20} color="#0f172a" />
        </Pressable>
        <Text style={styles.title}>À propos</Text>
        <View style={styles.backButton} />
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>Atlas Géographique</Text>
        <Text style={styles.text}>Découvrez les informations sur les pays du monde entier.</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
        <Text style={styles.text}>Développé avec React Native et Expo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  header: { height: 56, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 12, backgroundColor: '#fff', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#e6e6e6' },
  backButton: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 18, fontWeight: '700', flex: 1, textAlign: 'center' },
  content: { padding: 24, gap: 16 },
  heading: { fontSize: 24, fontWeight: '700', color: '#0f172a', marginBottom: 8 },
  text: { fontSize: 16, color: '#64748b', lineHeight: 24 },
  version: { fontSize: 14, color: '#94a3b8', marginTop: 8 },
});
