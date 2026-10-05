import { Stack } from 'expo-router';
import { MoviesProvider } from '@/context/movies';

// Root layout: a Stack (pages slide on top, with a Back button),
// wrapped in the provider so every page shares the same movies and watchlist.
export default function RootLayout() {
  return (
    <MoviesProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="movie/[id]" options={{ title: 'Movie', headerBackTitle: 'Back' }} />
      </Stack>
    </MoviesProvider>
  );
}
