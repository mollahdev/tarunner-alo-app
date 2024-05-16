/**
 * External dependencies 
 */ 
import { Outlet } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import withValidateToken from './with-validate-token'

const PublicLayout = withValidateToken(function() {
    return <Outlet/>
})

export default PublicLayout;
