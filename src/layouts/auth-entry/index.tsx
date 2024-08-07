/**
 * Native dependencies 
 */ 
import { ScrollView, Image, View } from 'react-native';
/**
 * External dependencies 
 */ 
import { Outlet, useLocation } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import withValidateToken from './with-validate-token'
import { Wrapper, Divider, DividerLine, ViewMemberButton } from './style';
import { Paragraph } from '@src/components';
import RegisterFooter from './register-footer';
import SignInFooter from './sign-in-footer';

const AuthEntry = withValidateToken(function() {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/register';

    return (
        <ScrollView contentContainerStyle={{justifyContent: 'center',}} contentInsetAdjustmentBehavior="automatic">
            <Wrapper>
                <View style={{alignItems: 'center', gap: 20, marginBottom: 20}}>
                    { !isRegisterPage && <Image
                        source={require('@assets/images/logo.jpeg')}
                        style={{ width: 150, height: 150}}
                    /> }
                    
                    <Paragraph 
                        sx={{
                            fontSize: 24,
                            fontFamily: 'Rubik-Bold',
                        }}
                    >
                        { isRegisterPage ? 'সদস্য হওয়ার ফর্ম' : 'তারুণ্যের আলোতে সাইন ইন করুন'}
                    </Paragraph>
                </View>
                <View>
                    <Outlet/>
                </View>
                <Divider>
                    <DividerLine />
                    <Paragraph 
                        sx={{
                            backgroundColor: '#fff', 
                            paddingHorizontal: 10,
                            color: '#83a1b7',
                        }}
                    >অথবা অন্যান্য বিকল্প চেষ্টা করুন</Paragraph>
                </Divider>
                <View style={{gap: 7, flexDirection: 'row'}}>
                    <ViewMemberButton style={{width: '48%'}} to="/announcements" underlayColor="transparent">
                        <Paragraph sx={{color: '#e64949', fontFamily: 'Rubik-SemiBold', fontSize: 16, alignItems: 'center'}}>
                            <Image 
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('@assets/images/bell.png')} 
                            />  ঘোষণাসমূহ</Paragraph>
                    </ViewMemberButton>
                    <ViewMemberButton style={{width: '48%'}} to="/member-list" underlayColor="transparent">
                        <Paragraph sx={{color: '#e64949', fontFamily: 'Rubik-SemiBold', fontSize: 16, alignItems: 'center'}}>
                            <Image 
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('@assets/images/user-add.png')} 
                            />  সদস্যদের দেখুন</Paragraph>
                    </ViewMemberButton>
                </View>
                { isRegisterPage ? <SignInFooter /> : <RegisterFooter />}
            </Wrapper>
        </ScrollView>
    )
})

export default AuthEntry;
