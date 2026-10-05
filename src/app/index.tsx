import { useState } from 'react';
import { View, Text, Image, TextInput, Pressable, StyleSheet } from 'react-native';

export default function Index() {
  const [name, setName] = useState('');   // what the user typed
  const [count, setCount] = useState(0);   // how many taps

  return (
    <View style={styles.screen}>
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Hello, {name || 'Mobile Dev'} 👋</Text>
      <TextInput style={styles.input} placeholder="Type your name…" value={name} onChangeText={setName} />
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Tapped {count} times</Text>
      </Pressable>
      <Text style={styles.footer}>Made by Ramy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16, padding: 24 },
  logo: { width: 64, height: 64 },
  title: { fontSize: 24, fontWeight: '700' },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', borderRadius: 10, padding: 12 },
  button: { backgroundColor: '#111', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
  buttonText: { color: '#fff', fontWeight: '600' },
  footer: { color: '#666', fontSize: 12 },
});