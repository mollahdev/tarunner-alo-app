/**
 * Native dependencies 
 */ 
import type { ComponentType, } from "react";
import { useEffect, useState } from "react";
/**
 * External dependencies 
 */ 
import { useNavigate } from "react-router-native"
/**
 * Internal dependencies 
 */
import storage from "@src/services/storage";

export default function withValidateToken(Component: ComponentType) {
    return function ValidateToken() {
        const navigate = useNavigate();
        const [ loading, setLoading ] = useState(true);
        const token = storage.getString('token');

        useEffect(() => {
            if (!token) {
                navigate('/login', { replace: true });
            }
            setLoading(false);
        }, [token]);

        if (loading) {
            return null;
        }

        return <Component />;
    }
}