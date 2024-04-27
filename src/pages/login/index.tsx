import { View, Image, Button } from 'react-native';
import storage from '@src/services/storage';
import { useNavigate } from 'react-router-native';

export default function Login() {
    const navigate = useNavigate();

    const onLogin = async () => {
        storage.set('token', '123456');
        navigate('/', { replace: true });
    }

    return (
        <View>
            <Image
                source={require('@assets/images/logo.jpeg')}
                style={{ width: 150, height: 150}}
            />
            <Button 
                onPress={onLogin}
                title="Login"
            />
        </View>
    )
}