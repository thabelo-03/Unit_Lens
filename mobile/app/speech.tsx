import { View, Text, StyleSheet } from 'react-native';

export default function SpeechScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🗣️ Speech & Hearing</Text>
            <Text style={styles.subtitle}>Owner: Oliviar</Text>
            <Text style={styles.description}>
                Build the Voice Assistant, text-to-speech output, and gesture recognition UI here.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#fff0f5' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 10, color: '#800080' },
    subtitle: { fontSize: 18, color: '#666', marginBottom: 20 },
    description: { textAlign: 'center', color: '#888', fontSize: 16, lineHeight: 24 }
});