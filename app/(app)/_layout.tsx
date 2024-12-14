import React from 'react';
import {Slot, Stack} from 'expo-router';


export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name='home' options={{
                title: 'Note App'
            }}/>
        </Stack>
    )
}