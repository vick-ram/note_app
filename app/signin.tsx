import React from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter, Link} from 'expo-router';

const logoImage = require('@/assets/images/note_logo.svg');

const SigninScreen = () => {
    const router = useRouter();

    const navigateToSignup = () => {
        router.push('/sign-up')
    }

    return (
        <>
            <View style={styles.container} >
                <Image source={logoImage} style={styles.image} />
                <Text>Sign in</Text>
                <TextInput style={styles.input} placeholder="email"/>
                <TextInput style={styles.input}  placeholder="password" />
                <Button title="Signin" />
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
        paddingBottom: 8
    }
})

export default SigninScreen;
