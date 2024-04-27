import { View, Image, Button } from 'react-native';
import storage from '@src/services/storage';
import { useNavigate } from 'react-router-native';

export default function Register() {
    const navigate = useNavigate();

    const onRegister = async () => {
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
                onPress={onRegister}
                title="Register"
            />
        </View>
    )
}