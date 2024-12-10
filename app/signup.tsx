import React, {useEffect} from "react";
import {useRouter, Link } from 'expo-router';
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';

export default function SignUpScreen() {
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TextInput placeholder="First Name"/>
            <TextInput placeholder="Last Name"/>
            <TextInput placeholder="Email"/>
            <TextInput placeholder="Password" />
            <Button title="Sign up" />
            <View style={styles.haveAccount}>
                <Text>Already have account?</Text>
                <Link  href='/signin'>Sign in</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'auto'
    },
    haveAccount: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})