import React, {useState} from "react";
import { Link } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {useAuth } from '../context/auth-context';

export default function SignUpScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup } = useAuth();
    
    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TextInput onChangeText={() => setFirstName(firstName)} placeholder="First Name"/>
            <TextInput onChangeText={() => setLastName(lastName)} placeholder="Last Name"/>
            <TextInput onChangeText={() => setEmail(email)} placeholder="Email"/>
            <TextInput onChangeText={() => setPassword(password)} placeholder="Password" />
            <Button onPress={() => signup(firstName, lastName, email, password)} title="Sign up" />
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