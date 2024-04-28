/**
 * Native dependencies 
 */ 
import { ScrollView, Button, Text } from 'react-native';
/**
 * External dependencies 
 */ 
import { Outlet } from 'react-router-native';
import { useSelector, useDispatch } from 'react-redux';
/**
 * Internal dependencies 
 */ 
import withValidateToken from './with-validate-token';
import { selectCount, increment } from '@src/services/data/users';

const AuthLayout = withValidateToken(function() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Outlet/>
            <Text>{count}</Text>
            <Button
                title="Increment"
                onPress={() => dispatch(increment())}
            />
        </ScrollView>
    )
})

export default AuthLayout;
