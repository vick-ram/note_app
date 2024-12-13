import React from "react";
import {TouchableOpacity, Text, TouchableOpacityProps, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

const Button = ({title, ...props}: ButtonProps) => {
    return (
        <TouchableOpacity {...props} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});


export default Button;
