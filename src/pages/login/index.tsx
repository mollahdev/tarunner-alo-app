/**
 * Native dependencies 
 */ 
import { View, Image, Text } from 'react-native';
/**
 * External dependencies  
 */ 
import { useNavigate, Link } from 'react-router-native';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import { Paragraph, AuthInput, Button } from '@src/components';

export default function Login() {
    const navigate = useNavigate();

    const onLogin = async () => {
        storage.set('token', '123456');
        navigate('/', { replace: true });
    }

    return (
        <View style={{gap: 20}}>
            <AuthInput
                label="আপনার ইমেইল লিখুন"
                placeholder="example@gmail.com"
            />
            <AuthInput
                label="আপনার পাসওয়ার্ড লিখুন"
                placeholder='********'
                secureTextEntry={true}
            >
                <Link to="/register" underlayColor="transparent">
                    <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular', color: '#ec1f27'}}>পাসওয়ার্ড ভুলে গেছেন?</Paragraph>
                </Link>
            </AuthInput>
            <Button
                onPress={onLogin}
            >
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
                    <Text>সাইন ইন করুন  </Text>
                    <Image source={require('@assets/images/angle-right.png')}/>
                </Paragraph>
            </Button>
        </View>
    )
}