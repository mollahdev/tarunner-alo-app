/**
 * Native dependencies 
 */ 
import type { ComponentType } from "react";
/**
 * External dependencies 
 */ 
import { Navigate } from "react-router-native"
/**
 * Internal dependencies 
 */
import { useLoading, useAppMeta, useBackHandler } from "@src/hooks";
import { AppLoader } from "@src/components";

export default function withValidateToken(Component: ComponentType) {
    return function ValidateToken() {
        useBackHandler();
        const loading = useLoading();
        const meta = useAppMeta();

        if (loading) {
            return <AppLoader/>;
        }

        if( meta.currentVersion !== meta.version ) {
            return <Navigate to="/update" replace />
        }

        return <Component />;
    }
}