// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import 'react-native-reanimated';
// import { Stack } from 'expo-router';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// // SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   if (!loaded) {
//     return null;
//   }

//  SplashScreen.preventAutoHideAsync();

//   return (
//     <Stack initialRouteName='signin'>
//       <Stack.Screen name='signin' options={{headerShown: false}} />
//       <Stack.Screen name='signup' options={{headerShown: false}} />
//       <Stack.Screen name='home' options={{headerShown: true ,title: 'Note App'}} />
//     </Stack>
//   )
// }

import { Slot, useRouter } from 'expo-router';
import { AuthProvider, useAuth } from './context/auth-context';
import { useEffect } from 'react';

export default function Layout() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace('/(auth)/signin');
    }
  }, [isAuthenticated]);

  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}

