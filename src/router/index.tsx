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
import { Home, Login, Register, MemberList } from '@src/pages';
import { AuthLayout, AuthEntry, PublicLayout } from '@src/layouts';

export default function RouterProvider( props: PropsWithChildren ) {
    return (
        <NativeRouter>
            { props.children }
            <Routes>
                <Route path="/" element={<AuthLayout/>}>
                    <Route index element={<Home/>} />
                </Route>
                <Route path="/" element={<AuthEntry/>}>
                    <Route path="login" element={<Login/>} />
                    <Route path="register" element={<Register/>} />
                </Route>
                <Route path="/" element={<PublicLayout/>}>
                    <Route path="member-list" element={<MemberList/>} />
                </Route>
            </Routes>
        </NativeRouter>
    )
}