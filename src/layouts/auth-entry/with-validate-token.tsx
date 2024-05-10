/**
 * Native dependencies 
 */ 
import type { ComponentType } from "react";
import { useEffect } from "react";
/**
 * External dependencies 
 */ 
import { useNavigate } from "react-router-native"
/**
 * Internal dependencies 
 */
import storage from "@src/services/storage";
import { useLoading } from "@src/hooks";
import { AppLoader } from "@src/components";

export default function withValidateToken(Component: ComponentType) {
    return function ValidateToken() {
        const navigate = useNavigate();
        const loading = useLoading();
        const token = storage.getString('token');

        useEffect(() => {
            if (token) {
                navigate('/', { replace: true });
            }
        }, [token]);

        if (loading) {
            return <AppLoader/>;
        }

        return <Component />;
    }
}