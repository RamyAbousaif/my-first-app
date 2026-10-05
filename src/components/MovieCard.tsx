import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Movie } from '@/data/movies';

type Props = {
  movie: Movie;
};

// One tappable row that opens the movie's details page.
export default function MovieCard({ movie }: Props) {
  return (
    <Link href={`/movie/${movie.id}`} asChild>
      <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
        <Text style={styles.emoji}>{movie.emoji}</Text>
        <View style={styles.info}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.meta}>
            {movie.year} · {movie.genre}
          </Text>
        </View>
        {movie.rating > 0 && <Text style={styles.rating}>⭐ {movie.rating.toFixed(1)}</Text>}
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  pressed: { opacity: 0.7 },
  emoji: { fontSize: 32 },
  info: { flex: 1 },
  title: { fontSize: 17, fontWeight: '700', color: '#111' },
  meta: { fontSize: 13, color: '#666', marginTop: 2 },
  rating: { fontSize: 14, fontWeight: '600', color: '#111' },
});
