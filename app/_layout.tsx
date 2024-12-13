import React, {useEffect, useState} from 'react';
import { Slot, useRouter } from 'expo-router';
import { AuthProvider, useAuth } from './context/auth-context'


function AuthenticatedLayout() {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.replace('/signin');
        }
    }, [isAuthenticated]);

    return <Slot/>
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthenticatedLayout />
    </AuthProvider>
  )
}

