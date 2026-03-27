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
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#0A0A1A' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#00D2FF' },
    subtitle: { fontSize: 18, color: '#8A8AAB', marginBottom: 20 },
    description: { textAlign: 'center', color: '#E0E0FF', fontSize: 16, lineHeight: 24 }
});