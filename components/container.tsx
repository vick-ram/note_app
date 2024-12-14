import React, {ReactNode} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

type ContainerProps = {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Container;