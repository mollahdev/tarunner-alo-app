/**
 * Native dependencies 
 */ 
import type { ComponentType, } from "react";
import { useEffect } from "react";
/**
 * External dependencies 
 */ 
import { useNavigate, Navigate } from "react-router-native"
/**
 * Internal dependencies 
 */
import storage from "@src/services/storage";
import { useLoading, useAppMeta } from "@src/hooks";
import { AppLoader } from "@src/components";


export default function withValidateToken(Component: ComponentType) {
    return function ValidateToken() {
        const navigate = useNavigate();
        const loading = useLoading();
        const meta = useAppMeta();
        const token = storage.getString('token');

        useEffect(() => {
            if (!token) {
                navigate('/login', { replace: true });
            }
        }, [token]);

        if (loading) {
            return <AppLoader />;
        }

        if( meta.currentVersion !== meta.version ) {
            return <Navigate to="/update" replace />
        }

        return <Component />;
    }
}