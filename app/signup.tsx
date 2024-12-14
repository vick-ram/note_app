import React, {useState} from "react";
import { Link } from 'expo-router';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Image} from 'expo-image';
import {useAuth } from './context/auth-context';
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Container from "@/components/container";

const logoImage = require('@/assets/images/note_logo.svg');

export default function SignUpScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup } = useAuth();
    
    return (
        <Container>
            <View style={styles.container}>
                <Image
                    source={logoImage}
                    style={styles.image}
                />
                <Text style={styles.title}>Sign Up</Text>
                <TextField
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <TextField
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <TextField
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextField
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Button
                    title="Sign up"
                    onPress={() => signup(firstName, lastName, email, password)}
                />
                <View style={styles.haveAccount}>
                    <Text style={styles.accountText}>Already have account?</Text>
                    <Link  href='/signin' style={styles.signupLink}>Sign in</Link>
                </View>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    image: {
        width: 200,
        height: 200,
        marginBottom: 20
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black'
    },

    haveAccount: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15
    },

    accountText: {
        marginRight: 5,
        color: 'black'
    },
    signupLink: {
        color: 'dodgerblue',
        fontWeight: 'bold'
    }
})