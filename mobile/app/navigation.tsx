import { View, Text, StyleSheet } from 'react-native';

export default function NavigationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>👁️‍🗨️ Zero-Touch Nav</Text>
            <Text style={styles.subtitle}>Owner: Thabelo</Text>
            <Text style={styles.description}>
                Build the Blink Navigator calibration and accessible UI elements here.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f5fffa' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#008080' },
    subtitle: { fontSize: 18, color: '#666', marginBottom: 20 },
    description: { textAlign: 'center', color: '#888', fontSize: 16, lineHeight: 24 }
});