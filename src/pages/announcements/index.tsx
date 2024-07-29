/**
 * Native dependencies 
 */ 
import { ScrollView } from 'react-native';
/**
 * External dependencies
 */ 
import { Outlet } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import Header from './header';
import { Wrapper } from './style';

export default function Announcements() {
    return (
        <Wrapper>
            <Header />
            <ScrollView
                contentContainerStyle={{flexGrow: 1}}
                showsVerticalScrollIndicator
            >
                <Outlet />
            </ScrollView>
        </Wrapper>
    )
}