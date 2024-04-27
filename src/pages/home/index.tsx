import { View, Text, Button } from 'react-native';
import storage from '@src/services/storage';
import { useNavigate } from 'react-router-native';

export default function Home() {
    const navigate = useNavigate();

    const onLogout = async () => {
        storage.delete('token');
        navigate('/login', { replace: true });
    }

    return (
        <View>
            <Text>Home</Text>
            <Button 
                onPress={onLogout}
                title="Logout"
            />
        </View>
    )
}