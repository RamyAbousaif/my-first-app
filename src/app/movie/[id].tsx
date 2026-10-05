import { Stack, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useMovies } from '@/context/movies';

// Page 2: details for one movie, with the watchlist toggle.
export default function MovieDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { movies, isInWatchlist, toggleWatchlist } = useMovies();
  const movie = movies.find((item) => item.id === id);

  if (!movie) {
    return (
      <View style={styles.screen}>
        <Stack.Screen options={{ title: 'Not found' }} />
        <Text style={styles.notFound}>Movie not found</Text>
      </View>
    );
  }

  const saved = isInWatchlist(movie.id);

  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: movie.title }} />
      <Text style={styles.emoji}>{movie.emoji}</Text>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.meta}>
        {movie.year} · {movie.genre}
      </Text>
      {movie.rating > 0 && <Text style={styles.rating}>⭐ {movie.rating.toFixed(1)} / 10</Text>}
      <Pressable
        style={({ pressed }) => [styles.button, saved && styles.buttonSaved, pressed && styles.pressed]}
        onPress={() => toggleWatchlist(movie.id)}
      >
        <Text style={[styles.buttonText, saved && styles.buttonTextSaved]}>
          {saved ? '★ Remove from watchlist' : '☆ Add to watchlist'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', padding: 24, gap: 8, backgroundColor: '#f2f2f5' },
  emoji: { fontSize: 96, marginTop: 24 },
  title: { fontSize: 28, fontWeight: '800', color: '#111', textAlign: 'center' },
  meta: { fontSize: 16, color: '#666' },
  rating: { fontSize: 18, fontWeight: '600', color: '#111', marginTop: 4 },
  button: {
    marginTop: 24,
    backgroundColor: '#111',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#111',
  },
  buttonSaved: { backgroundColor: '#fff' },
  pressed: { opacity: 0.7 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  buttonTextSaved: { color: '#111' },
  notFound: { fontSize: 18, color: '#666', marginTop: 48 },
});
