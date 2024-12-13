import React, {useState} from "react";
import { Link } from 'expo-router';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {useAuth } from './context/auth-context';
import TextField from "@/components/TextField";
import Button from "@/components/Button";

export default function SignUpScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signup } = useAuth();
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextField placeholder="First Name" value={firstName} onChangeText={(newFirstName) => setFirstName(newFirstName)}/>
            <TextField placeholder="Last Name" value={lastName} onChangeText={(newLastName) => setLastName(newLastName)}/>
            <TextField placeholder="Email" value={email} onChangeText={(newEmail) => setEmail(newEmail)}/>
            <TextField placeholder="Password" value={password} onChangeText={(newPassword) => setPassword(newPassword)} secureTextEntry={true}/>
            <Button title="Sign up" onPress={() => signup(firstName, lastName, email, password)} />
            <View style={styles.haveAccount}>
                <Text style={styles.accountText}>Already have account?</Text>
                <Link  href='/signin' style={styles.signupLink}>Sign in</Link>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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