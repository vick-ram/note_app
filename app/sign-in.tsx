import React from "react";
import { View, StyleSheet } from 'react-native';
import { Image} from 'expo-image';

const logoImage = require('@/assets/images/note_logo.svg');

const SigninScreen = () => {
    return (
        <>
            <View style={styles.container} >
                <Image source={logoImage} style={styles.image} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 400,
        height: 300,
        objectFit: 'cover',
    }
})

export default SigninScreen;
