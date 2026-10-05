import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import MovieCard from '@/components/MovieCard';
import { useMovies } from '@/context/movies';

// Page 1: every movie, with a search box.
export default function MoviesScreen() {
  const { movies } = useMovies();
  const [query, setQuery] = useState('');

  // Filter only when movies or query changes.
  const filteredMovies = useMemo(
    () => movies.filter((movie) => movie.title.toLowerCase().includes(query.trim().toLowerCase())),
    [movies, query],
  );

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.search}
        placeholder="Search movies"
        value={query}
        onChangeText={setQuery}
        autoCorrect={false}
        clearButtonMode="while-editing"
      />
      <FlatList
        data={filteredMovies}
        keyExtractor={(movie) => movie.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        contentContainerStyle={styles.list}
        keyboardShouldPersistTaps="handled"
        ListEmptyComponent={<Text style={styles.empty}>No movie matches “{query}”</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f2f2f5' },
  search: {
    margin: 16,
    marginBottom: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  list: { padding: 16, gap: 12 },
  empty: { textAlign: 'center', color: '#666', marginTop: 32, fontSize: 15 },
});
