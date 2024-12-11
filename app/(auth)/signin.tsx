import React, {useState} from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import {useAuth } from '../context/auth-context';

const logoImage = require('@/assets/images/note_logo.svg');

const SigninScreen = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const { signin} = useAuth();
    return (
        <>
            <View style={styles.container} >
                <Image source={logoImage} style={styles.image} />
                <Text>Sign in</Text>
                <TextInput value={email} onChangeText={(newEmail) => setEmail(newEmail)} style={styles.input} placeholder="email"/>
                <TextInput value={password} onChangeText={(newPassword) => setPassword(newPassword)} style={styles.input}  placeholder="password" secureTextEntry={true} />
                <Button onPress={() => signin(email, password)} title="Signin" />
                <View style={styles.haveAccount}>
                    <Text>Don't have an account?</Text>
                    <Link href='/signup'>Sign up</Link>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    image: {
        width: 400,
        height: 300,
        objectFit: 'cover',
        marginBottom: 8
    },
    haveAccount: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    input: {
        width: '100%',
        padding: 10
    }
})

export default SigninScreen;
