/**
 * Native dependencies 
 */
import { Text } from 'react-native';
/**
 * External dependencies 
 */ 
import { Link } from "react-router-native";
/**
 * Internal dependencies 
 */ 
import RouterProvider from '@src/router';

export default function App() {
  return (
    <RouterProvider>
        <Link to="/">
            <Text>Home</Text>
        </Link>
        <Link to="/login">
            <Text>Login</Text>
        </Link>
        <Link to="/register">
            <Text>Register</Text>
        </Link>
    </RouterProvider>
  );
}
