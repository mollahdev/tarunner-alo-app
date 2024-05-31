import { BackHandler } from 'react-native';
import { useNavigate, useLocation } from 'react-router-native';
import { useEffect } from 'react';

export default function useBackHandler() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            () => {
                if (
                    location.pathname === '/login' ||
                    location.pathname === '/'
                ) {
                    return false;
                }

                navigate(-1);
                return true;
            }
        );
        
        return () => backHandler.remove();
    }, [navigate]);
}