/**
 * Native dependencies 
 */ 
import { View, Image, Text, ToastAndroid } from 'react-native';
import { useState } from 'react';
/**
 * External dependencies  
 */ 
import { useNavigate, Link } from 'react-router-native';
import { Formik } from 'formik';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import { Paragraph, AuthInput, Button } from '@src/components';
import Api from '@src/services/api';
import { loginSchema } from './schema';
import { INITIAL_VALUES, INITIAL_ERROR_VALUE } from './constants';

export default function Login() {
    const [serverErrors, setServerErrors] = useState(INITIAL_ERROR_VALUE)
    const navigate = useNavigate();

    const onLogin = async (values: any, { setSubmitting } : any) => {
        setSubmitting(true);
        setServerErrors(INITIAL_ERROR_VALUE)

        try {
            const response = await Api.User.login(values);

            if (response.data) {
                storage.set('token', response.data.access_token);
                navigate('/', { replace: true });
            }
        } catch(err: any ) {
            setServerErrors(prevState => {
                return {
                    ...prevState,
                    ...(err.errors || {})
                }
            })

            ToastAndroid.showWithGravity(
                err.message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );
        }

        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            validationSchema={loginSchema}
            onSubmit={onLogin}
            autoComplete="off"
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                handleBlur,
                isSubmitting,
            }) => (
            <View style={{gap: 20}}>
                <AuthInput
                    label="আপনার ইমেইল লিখুন"
                    placeholder="example@gmail.com"
                    onChangeText={ev => {
                        handleChange('email')(ev);
                        setServerErrors(prevState => ({...prevState, email: false}))
                    }}
                    value={values.email}
                    error={(touched.email && errors.email) || serverErrors.email}
                    onBlur={handleBlur('email')}
                />
                <AuthInput
                    label="আপনার পাসওয়ার্ড লিখুন"
                    placeholder='********'
                    secureTextEntry={true}
                    onChangeText={ev => {
                        handleChange('password')(ev);
                        setServerErrors(prevState => ({...prevState, password: false}))
                    }}
                    value={values.password}
                    error={(touched.password && errors.password) || serverErrors.password}
                    onBlur={handleBlur('password')}
                >
                    <Link to="/register" underlayColor="transparent">
                        <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular', color: '#ec1f27'}}>পাসওয়ার্ড ভুলে গেছেন?</Paragraph>
                    </Link>
                </AuthInput>
                <Button styles={{marginTop: 10}} onPress={handleSubmit}>
                    <Paragraph
                        style={{fontFamily: 'Rubik-Bold'}}
                        sx={{
                            backgroundColor: '#ec1f27',
                            color: '#fff',
                            paddingVertical: 15,
                            textAlign: 'center',
                            borderRadius: 8,
                            fontSize: 16,
                            gap: 10,
                            ...(isSubmitting ? {
                                pointerEvents: 'none',
                                backgroundColor: '#ccc',
                            } : {})
                        }}
                    >
                        <Text>{isSubmitting ? 'যাচাই করা হচ্ছে...' : 'সাইন ইন করুন'} </Text>
                        { !isSubmitting && <Image source={require('@assets/images/angle-right.png')}/> }
                    </Paragraph>
                </Button>
            </View>
        )}</Formik>
    )
}