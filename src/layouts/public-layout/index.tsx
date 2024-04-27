/**
 * Native dependencies 
 */ 
import { ScrollView } from 'react-native';
/**
 * External dependencies 
 */ 
import { Outlet } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import { Body } from '@src/components';
import withValidateToken from './with-validate-token'

const PublicLayout = withValidateToken(function() {
    return (
        <Body>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Outlet/>
            </ScrollView>
        </Body>
    )
})

export default PublicLayout;
