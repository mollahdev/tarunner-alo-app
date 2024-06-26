/**
 * Native dependencies 
 */ 
import type { ComponentType } from "react";
import { useEffect } from "react";
/**
 * External dependencies 
 */ 
import { useNavigate, Navigate } from "react-router-native"
/**
 * Internal dependencies 
 */
import storage from "@src/services/storage";
import { useLoading, useAppMeta, useBackHandler } from "@src/hooks";
import { AppLoader } from "@src/components";

export default function withValidateToken(Component: ComponentType) {
    return function ValidateToken() {
        useBackHandler();
        const navigate = useNavigate();
        const loading = useLoading();
        const meta = useAppMeta();
        const token = storage.getString('token');

        useEffect(() => {
            if (token) {
                navigate('/', { replace: true });
            }
        }, [token]);

        if (loading) {
            return <AppLoader/>;
        }

        if( meta.currentVersion !== meta.version ) {
            return <Navigate to="/update" replace />
        }

        return <Component />;
    }
}