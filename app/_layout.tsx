import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { Stack } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack initialRouteName='signin'>
      <Stack.Screen name='signin' options={{headerShown: false}} />
      <Stack.Screen name='signup' options={{headerShown: false}} />
      <Stack.Screen name='home' options={{headerShown: true ,title: 'Note App'}} />
    </Stack>
  )
}
