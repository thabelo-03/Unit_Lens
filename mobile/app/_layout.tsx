import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#007AFF',
            headerShown: true,
            tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 70 }
        }}>
            <Tabs.Screen
                name="visual"
                options={{
                    title: 'Visual',
                    tabBarLabel: 'Julia (Visual)',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="eye" size={size + 4} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="navigation"
                options={{
                    title: 'Navigation',
                    tabBarLabel: 'Thabelo (Nav)',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="navigate" size={size + 4} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="speech"
                options={{
                    title: 'Speech',
                    tabBarLabel: 'Oliviar (Speech)',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="mic" size={size + 4} color={color} />
                    )
                }}
            />
        </Tabs>
    );
}