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
import { Paragraph, AuthInput } from '@src/components';

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
        <View style={{gap: 20}}>
            <AuthInput
                label="Enter Your Email"
                placeholder="example@gmail.com"
            />
            <AuthInput
                label="Enter Your Password"
                placeholder='********'
                secureTextEntry={true}
            />
            <Button 
                onPress={onLogin}
                title="Login"
            />
        </View>
    )
}