import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { useMovies } from '@/context/movies';

// Page 4: a form that adds a new movie to the shared list.
export default function AddMovieScreen() {
  const { addMovie } = useMovies();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');

  const titleRef = useRef<TextInput>(null);
  const yearRef = useRef<TextInput>(null);

  function save() {
    if (!title.trim()) {
      setError('Title is required');
      titleRef.current?.focus();
      return;
    }

    const yearNumber = Number(year);
    if (!year.trim() || !Number.isInteger(yearNumber) || yearNumber < 1900 || yearNumber > 2030) {
      setError('Year must be a number from 1900 to 2030');
      yearRef.current?.focus();
      return;
    }

    addMovie({
      title: title.trim(),
      year: yearNumber,
      genre: genre.trim() || 'Unknown',
      rating: 0,
      emoji: '🎬',
    });

    setTitle('');
    setYear('');
    setGenre('');
    setError('');
    router.push('/');
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Title</Text>
      <TextInput
        ref={titleRef}
        style={styles.input}
        placeholder="e.g. Toy Story"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Year</Text>
      <TextInput
        ref={yearRef}
        style={styles.input}
        placeholder="e.g. 1995"
        value={year}
        onChangeText={setYear}
        keyboardType="number-pad"
        maxLength={4}
      />

      <Text style={styles.label}>Genre</Text>
      <TextInput style={styles.input} placeholder="e.g. Animation" value={genre} onChangeText={setGenre} />

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={save}>
        <Text style={styles.buttonText}>Save movie</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#f2f2f5' },
  form: { padding: 16, gap: 8 },
  label: { fontSize: 14, fontWeight: '600', color: '#333', marginTop: 8 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  error: { color: '#dc2626', fontSize: 14, marginTop: 4 },
  button: {
    marginTop: 16,
    backgroundColor: '#111',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  pressed: { opacity: 0.7 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
