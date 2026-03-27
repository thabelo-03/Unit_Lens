import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
            Animated.timing(slideAnim, { toValue: 0, duration: 800, easing: Easing.out(Easing.cubic), useNativeDriver: true })
        ]).start();
    }, [fadeAnim, slideAnim]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
                <View style={styles.logoContainer}>
                    <Ionicons name="hardware-chip-outline" size={60} color="#8A2BE2" />
                </View>

                <Text style={styles.title}>INITIALIZE</Text>
                <Text style={styles.subtitle}>Join the Neural Network</Text>

                <View style={styles.inputWrapper}>
                    <Ionicons name="person-outline" size={20} color="#8A8AAB" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Full Name / Designation" placeholderTextColor="#555570" />
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="mail-outline" size={20} color="#8A8AAB" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Identity / Email" placeholderTextColor="#555570" autoCapitalize="none" keyboardType="email-address" />
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="lock-closed-outline" size={20} color="#8A8AAB" style={styles.icon} />
                    <TextInput style={styles.input} placeholder="Access Code / Password" placeholderTextColor="#555570" secureTextEntry />
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={() => router.replace('/(tabs)/visual')}>
                    <Ionicons name="cloud-upload-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
                    <Text style={styles.buttonText}>Sync Profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.secondaryButton} onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={16} color="#8A8AAB" style={{ marginRight: 4 }} />
                    <Text style={styles.secondaryButtonText}>Return to Auth</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0A0A1A', justifyContent: 'center' },
    content: { paddingHorizontal: 30 },
    logoContainer: { alignItems: 'center', marginBottom: 20, shadowColor: '#8A2BE2', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 20, elevation: 10 },
    title: { fontSize: 36, fontWeight: '900', textAlign: 'center', color: '#FFFFFF', letterSpacing: 4, marginBottom: 5 },
    subtitle: { fontSize: 14, color: '#8A2BE2', textAlign: 'center', marginBottom: 40, letterSpacing: 1, textTransform: 'uppercase' },

    inputWrapper: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#151525', borderWidth: 1, borderColor: '#2A2A40', borderRadius: 12, marginBottom: 16, paddingHorizontal: 15, height: 55 },
    icon: { marginRight: 10 },
    input: { flex: 1, color: '#E0E0FF', fontSize: 16 },

    primaryButton: { flexDirection: 'row', backgroundColor: '#00D2FF', height: 55, borderRadius: 12, alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 20, shadowColor: '#00D2FF', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 5 },
    buttonText: { color: '#0A0A1A', fontSize: 16, fontWeight: 'bold', letterSpacing: 1, textTransform: 'uppercase' },

    secondaryButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 15 },
    secondaryButtonText: { color: '#8A8AAB', fontSize: 14, fontWeight: '600', letterSpacing: 1, textTransform: 'uppercase' }
});