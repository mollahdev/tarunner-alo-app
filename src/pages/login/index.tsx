/**
 * Native dependencies 
 */ 
import { View, Button } from 'react-native';
import { useLayoutEffect } from 'react';
/**
 * External dependencies  
 */ 
import { useNavigate, useOutletContext } from 'react-router-native';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import type { AuthEntryContext } from '@src/layouts/auth-entry/types';

export default function Login() {
    const navigate = useNavigate();
    const [ setTtitle ] = useOutletContext<AuthEntryContext>();

    useLayoutEffect(() => {
        setTtitle('Sign In to Tarunner Alo');
    }, [])


    const onLogin = async () => {
        storage.set('token', '123456');
        navigate('/', { replace: true });
    }

    return (
        <View>
            <Button 
                onPress={onLogin}
                title="Login"
            />
        </View>
    )
}