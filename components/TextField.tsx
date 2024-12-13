import React from "react";
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

interface TextFieldProps extends TextInputProps {
    placeholder: string;
}

export default function TextField({placeholder, ...props}: TextFieldProps) {
    return <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#999'}
        {...props} 
    />
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        padding: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: '#f9f9f9',
        marginBottom: 15,
        color: 'black'
    }
});