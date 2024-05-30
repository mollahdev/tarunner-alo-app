/**
 * Native dependencies 
 */ 
import { Text, StatusBar } from 'react-native';
import { useEffect } from 'react';
/**
 * External dependencies 
 */
import { useNavigate } from 'react-router-native';
/**
 * Internal dependencies 
 */
import { useAppMeta } from '@src/hooks';
import { Wrapper } from './style';

export default function Update() {
    const navigate = useNavigate();
    const meta = useAppMeta();

    useEffect(() => {
        if( meta.currentVersion === meta.version ) {
            navigate('/', { replace: true });
        }
    }, [meta]);

    return (
        <Wrapper>
            <StatusBar hidden />
            <Text>Update Available</Text>
        </Wrapper>
    )
}