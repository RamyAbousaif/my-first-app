import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>;
}

// Bottom tab bar: Movies · Watchlist · Add
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#111' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Movies',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🎬" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: 'Watchlist',
          tabBarIcon: ({ focused }) => <TabIcon emoji="⭐" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add movie',
          tabBarLabel: 'Add',
          tabBarIcon: ({ focused }) => <TabIcon emoji="＋" focused={focused} />,
        }}
      />
    </Tabs>
  );
}
