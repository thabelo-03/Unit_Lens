import { View, Text, StyleSheet } from 'react-native';

export default function VisualScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>👁️ Visual & Spatial</Text>
            <Text style={styles.subtitle}>Owner: Julia</Text>
            <Text style={styles.description}>
                Build the YOLOv8 camera feed and MiDaS haptic feedback UI here.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f8ff' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#0056b3' },
    subtitle: { fontSize: 18, color: '#666', marginBottom: 20 },
    description: { textAlign: 'center', color: '#888', fontSize: 16, lineHeight: 24 }
});