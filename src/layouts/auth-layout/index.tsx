/**
 * Native dependencies 
 */ 
import { ScrollView, Text } from 'react-native';
/**
 * External dependencies 
 */ 
import { Outlet, Link, redirect } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import { Body } from '@src/components';
import withValidateToken from './with-validate-token';

const AuthLayout = withValidateToken(function() {
    return (
        <Body>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Outlet/>
            </ScrollView>
        </Body>
    )
})

export default AuthLayout;
