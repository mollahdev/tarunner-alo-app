/**
 * Native dependencies 
 */ 
import type { PropsWithChildren } from "react";
/**
 * External dependencies 
 */ 
import { NativeRouter, Routes, Route } from "react-router-native";
/**
 * Internal dependencies 
 */ 
import { Home, Login, Register } from '@src/pages';
import { AuthLayout, PublicLayout } from '@src/layouts';

export default function RouterProvider( props: PropsWithChildren ) {
    return (
        <NativeRouter>
            { props.children }
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Home/>} />
                </Route>
                <Route path="/" element={<PublicLayout/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>
            </Routes>
        </NativeRouter>
    )
}