import { useRouter } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function WelcomePage() {
  const router = useRouter();

  function handleEnter() {
    router.replace('/(tabs)/countries');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appBarTitle}>Atlas Géographique</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.circle}>
          <Image source={require('../assets/images/globe.png')} style={styles.image} resizeMode="contain" />
        </View>

        <Text style={styles.heading}>Découvrez les pays{"\n"}du monde</Text>
      </View>

      <Pressable style={styles.button} onPress={handleEnter} android_ripple={{ color: '#ffffff22' }}>
        <Text style={styles.buttonText}>Explorer</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07121A',
  },
  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appBarTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  circle: {
    width: Math.min(width * 0.7, 320),
    height: Math.min(width * 0.7, 320),
    borderRadius: Math.min(width * 0.7, 320) / 2,
    backgroundColor: '#F6EBDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  image: {
    width: '64%',
    height: '64%',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 28,
  },
  button: {
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 20,
    backgroundColor: '#1E90FF',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
