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
import withValidateToken from './with-validate-token'

const PublicLayout = withValidateToken(function() {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Outlet/>
        </ScrollView>
    )
})

export default PublicLayout;
