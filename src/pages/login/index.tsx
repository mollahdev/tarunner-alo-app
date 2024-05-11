/**
 * Native dependencies 
 */ 
import { View, Image, Text } from 'react-native';
import { useLayoutEffect } from 'react';
/**
 * External dependencies  
 */ 
import { useNavigate, useOutletContext, Link } from 'react-router-native';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import type { AuthEntryContext } from '@src/layouts/auth-entry/types';
import { Paragraph, AuthInput, Button } from '@src/components';

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
            >
                <Link to="/register" underlayColor="transparent">
                    <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular', color: '#ec1f27'}}>Forgot Password?</Paragraph>
                </Link>
            </AuthInput>
            <Button>
                <Paragraph
                    style={{fontFamily: 'Rubik-Bold'}}
                    sx={{
                        backgroundColor: '#ec1f27',
                        color: '#fff',
                        paddingVertical: 15,
                        textAlign: 'center',
                        borderRadius: 8,
                        fontSize: 16,
                        gap: 10,
                    }}
                >
                    <Text>Sign In  </Text>
                    <Image source={require('@assets/images/angle-right.png')}/>
                </Paragraph>
            </Button>
        </View>
    )
}