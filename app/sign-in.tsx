import React from "react";
import { View, Text, TextInput, Button, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { useRouter} from 'expo-router';

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
                <TextInput placeholder="email"/>
                <TextInput placeholder="password" />
                <Button title="Signin" />
                <View style={styles.haveAccount}>
                    <Text>Don't have an account?</Text>
                    <Pressable onPress={navigateToSignup}>Sign up</Pressable>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 400,
        height: 300,
        objectFit: 'cover',
    },
    haveAccount: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default SigninScreen;
