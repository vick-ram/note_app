import React, {useState} from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import {useAuth } from './context/auth-context';
import TextField from "@/components/TextField";
import Button from "@/components/Button";

const logoImage = require('@/assets/images/note_logo.svg');

const SigninScreen = () => {

    const [email, setEmail ] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const { signin} = useAuth();
    return (
        <>
            <View style={styles.container} >
                <Image
                    source={logoImage}
                    style={styles.image}
                />
                <Text style={styles.title}>Sign in</Text>
                <TextField placeholder="Email" value={email} onChangeText={(newEmail) => setEmail(newEmail)}/>
                <TextField placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} secureTextEntry={true}/>
                <Button title="Sign in" onPress={() => signin(email, password)} />
                <View style={styles.haveAccount}>
                    <Text style={styles.accountText}>Don't have an account?</Text>
                    <Link href='/signup' style={styles.signupLink}>Sign up</Link>
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

export default SigninScreen;
