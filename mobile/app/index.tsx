import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Unit Lens - Frontend Skeleton</Text>
            <Text style={styles.subtitle}>Ready for UI Development!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    subtitle: { marginTop: 10, color: '#666' }
});