import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#00D2FF',
            tabBarInactiveTintColor: '#8A8AAB',
            headerShown: true,
            headerStyle: { backgroundColor: '#0A0A1A' },
            headerTintColor: '#fff',
            tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
            tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 70, backgroundColor: '#0A0A1A', borderTopColor: '#2A2A40' }
        }}>
            <Tabs.Screen
                name="visual"
                options={{
                    title: 'Visual Matrix',
                    tabBarLabel: 'Visual',
                    tabBarIcon: ({ color, size }) => <Ionicons name="eye" size={size + 4} color={color} />
                }}
            />
            <Tabs.Screen
                name="navigation"
                options={{
                    title: 'Blink Navigator',
                    tabBarLabel: 'Nav',
                    tabBarIcon: ({ color, size }) => <Ionicons name="navigate" size={size + 4} color={color} />
                }}
            />
            <Tabs.Screen
                name="speech"
                options={{
                    title: 'Neural Speech',
                    tabBarLabel: 'Speech',
                    tabBarIcon: ({ color, size }) => <Ionicons name="mic" size={size + 4} color={color} />
                }}
            />
        </Tabs>
    );
}