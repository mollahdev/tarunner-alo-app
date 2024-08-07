/**
 * Native dependencies 
 */ 
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
/**
 * External dependencies 
 */ 
import { NativeRouter, Routes, Route } from "react-router-native";
/**
 * Internal dependencies 
 */ 
import { 
    Home, Login, Register, MemberList, Update, Announcements, 
    StarredAnnouncements, NewestAnnouncements, ArchivedAnnouncements
} from '@src/pages';
import { AuthLayout, AuthEntry, PublicLayout } from '@src/layouts';
import { useFetchInitialData } from "@src/hooks";


export default function RouterProvider( props: PropsWithChildren ) {
    const fetchInitialData = useFetchInitialData()

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
                    <Route path="announcements" element={<Announcements/>}>
                        <Route index element={<NewestAnnouncements/>} />
                        <Route path="starred" element={<StarredAnnouncements/>} />
                        <Route path="archived" element={<ArchivedAnnouncements/>} />
                    </Route>
                </Route>
                <Route path="update" element={<Update/>} />
            </Routes>
        </NativeRouter>
    )
}