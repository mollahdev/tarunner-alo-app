/**
 * Native dependencies 
 */ 
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
/**
 * External dependencies 
 */ 
import { NativeRouter, Routes, Route } from "react-router-native";
import { useDispatch } from "react-redux";
/**
 * Internal dependencies 
 */ 
import { Home, Login, Register, MemberList, Update } from '@src/pages';
import { AuthLayout, AuthEntry, PublicLayout } from '@src/layouts';
import Api from '@src/services/api';
import { setMeta } from "@src/services/data/app";

export default function RouterProvider( props: PropsWithChildren ) {
    const dispatch = useDispatch();

    async function fetchInitialData() {
        const appMeta = await Api.App.getMeta()
        if( appMeta.data ) {
            dispatch(setMeta(appMeta.data))
        }
    }

    useEffect(() => {
        fetchInitialData()
    }, [])

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
                <Route path="update" element={<Update/>} />
            </Routes>
        </NativeRouter>
    )
}