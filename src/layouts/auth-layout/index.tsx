/**
 * Native dependencies 
 */ 
import { ScrollView, Text, ToastAndroid } from 'react-native';
import { useEffect } from 'react';
/**
 * External dependencies 
 */ 
import { Outlet, useNavigate } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
/**
 * Internal dependencies 
 */ 
import withValidateToken from './with-validate-token';
import Api from '@src/services/api';
import { setCurrentUser, selectCurrentUser } from '@src/services/data/users';
import storage from '@src/services/storage';

const AuthLayout = withValidateToken(function() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);

    const fetchProfileData = async () => {
        try {
            const response = await Api.User.profile()

            if( response.data ){
                dispatch(setCurrentUser(response.data));
            } else {
                throw new Error(response.message);
            }

        } catch (err: any) {
            dispatch(setCurrentUser(null));
            // logout user
            storage.delete('token');
            navigate('/login', { replace: true });

            ToastAndroid.showWithGravity(
                err.message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );
        }
    }

    useEffect(() => {
        if( !currentUser ) {
            fetchProfileData();
        }
    }, [])

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Text style={{color: 'red'}}>Hello World</Text>
            { currentUser && <Outlet/> }
        </ScrollView>
    )
})

export default AuthLayout;
