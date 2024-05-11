/**
 * Native dependencies 
 */ 
import { ScrollView, Image, View } from 'react-native';
import { useState } from 'react';
/**
 * External dependencies 
 */ 
import { Outlet, useLocation } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import type { AuthEntryContext } from './types';
import withValidateToken from './with-validate-token'
import { Wrapper, Divider, DividerLine, ViewMemberButton } from './style';
import { Paragraph } from '@src/components';
import RegisterFooter from './register-footer';
import SignInFooter from './sign-in-footer';

const AuthEntry = withValidateToken(function() {
    const [ title, setTitle ] = useState('Sign In to Tarunner Alo');
    const location = useLocation();
    const isRegisterPage = location.pathname === '/register';

    const contextValues = [
        setTitle
    ] satisfies AuthEntryContext

    return (
        <ScrollView contentContainerStyle={{justifyContent: 'center'}} contentInsetAdjustmentBehavior="automatic">
            <Wrapper>
                <View style={{alignItems: 'center', gap: 20, marginBottom: 20}}>
                    <Image
                        source={require('@assets/images/logo.jpeg')}
                        style={{ width: 150, height: 150}}
                    />
                    <Paragraph 
                        sx={{
                            fontSize: 24,
                            fontFamily: 'Rubik-Bold',
                        }}
                    >{title}</Paragraph>
                </View>
                <View>
                    <Outlet context={ contextValues } />
                </View>
                <Divider>
                    <DividerLine />
                    <Paragraph 
                        sx={{
                            backgroundColor: '#fff', 
                            paddingHorizontal: 10,
                            color: '#83a1b7',
                        }}
                    >Or try other options</Paragraph>
                </Divider>
                <View style={{gap: 14}}>
                    <ViewMemberButton to="/member-list" underlayColor="transparent">
                        <Paragraph sx={{color: '#e64949', fontFamily: 'Rubik-SemiBold', fontSize: 16, alignItems: 'center'}}>
                            <Image 
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('@assets/images/user-add.png')} 
                            />  See Our Members</Paragraph>
                    </ViewMemberButton>
                    { isRegisterPage ? <SignInFooter /> : <RegisterFooter />}
                </View>
            </Wrapper>
        </ScrollView>
    )
})

export default AuthEntry;
