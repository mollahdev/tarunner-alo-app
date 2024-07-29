/**
 * Native dependencies 
 */ 
import { View, Text, Button } from 'react-native';
/**
 * External dependencies 
 */ 
import { useNavigate } from 'react-router-native';
import { useSelector } from 'react-redux';
/**
 * Internal dependencies 
 */ 
import storage from '@src/services/storage';
import { selectCurrentUser } from '@src/services/data/users';

export default function Home() {
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);

    const onLogout = async () => {
        storage.delete('token');
        navigate('/login', { replace: true });
    }

    console.log(currentUser)

    return (
        <View>
           <Text style={{color: 'green', fontSize: 30}}>{ currentUser?.first_name } {currentUser?.last_name}</Text>
            <Button 
                onPress={onLogout}
                title="Logout"
            />
        </View>
    )
}