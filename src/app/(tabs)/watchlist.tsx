import { FlatList, StyleSheet, Text, View } from 'react-native';
import MovieCard from '@/components/MovieCard';
import { useMovies } from '@/context/movies';

// Page 3: only the movies saved to the watchlist.
export default function WatchlistScreen() {
  const { movies, watchlist } = useMovies();
  const savedMovies = movies.filter((movie) => watchlist.includes(movie.id));

  if (savedMovies.length === 0) {
    return (
      <View style={[styles.screen, styles.center]}>
        <Text style={styles.emptyEmoji}>🍿</Text>
        <Text style={styles.empty}>Your watchlist is empty — add a movie from its page</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.count}>
        {savedMovies.length} {savedMovies.length === 1 ? 'movie' : 'movies'} to watch
      </Text>
      <FlatList
        data={savedMovies}
        keyExtractor={(movie) => movie.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f2f2f5' },
  center: { alignItems: 'center', justifyContent: 'center', padding: 32, gap: 12 },
  count: { fontSize: 15, color: '#666', marginHorizontal: 16, marginTop: 16 },
  list: { padding: 16, gap: 12 },
  emptyEmoji: { fontSize: 48 },
  empty: { textAlign: 'center', color: '#666', fontSize: 16 },
});
