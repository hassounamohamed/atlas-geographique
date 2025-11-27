import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Replace root with WelcomePage so it is shown first
    router.replace('/WelcomePage');
  }, [router]);

  return null;
}
