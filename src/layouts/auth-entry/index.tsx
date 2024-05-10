/**
 * Native dependencies 
 */ 
import { ScrollView, Image } from 'react-native';
import { useState } from 'react';
/**
 * External dependencies 
 */ 
import { Outlet } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import withValidateToken from './with-validate-token'
import { Wrapper } from './style';
import { Paragraph } from '@src/components';
import type { AuthEntryContext } from './types';

const AuthEntry = withValidateToken(function() {
    const [ title, setTitle ] = useState('Sign In to Tarunner Alo');

    const contextValues = [
        setTitle
    ] satisfies AuthEntryContext

    return (
        <ScrollView contentContainerStyle={{flex: 1, justifyContent: 'center'}} contentInsetAdjustmentBehavior="automatic">
            <Wrapper>
                <Image
                    source={require('@assets/images/logo.jpeg')}
                    style={{ width: 150, height: 150}}
                />
                <Paragraph sx={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: '#49687e',
                }}>{title}</Paragraph>
                <Outlet context={ contextValues } />
            </Wrapper>
        </ScrollView>
    )
})

export default AuthEntry;
