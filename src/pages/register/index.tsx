/**
 * Native Dependencies 
 */ 
import { View, Text, Image, ToastAndroid } from 'react-native';
import { default as DropdownSelect } from 'react-native-input-select';
import { Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-native';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import {AuthInput, Button, Paragraph, PhoneNumber, DatePicker, ImagePicker } from '@src/components';
import { FlexWrapper } from './style';
import { INITIAL_VALUES, BLOOD_GROUP, registerSchema } from './constants';
import Api from '@src/services/api';

const INITIAL_ERROR_VALUE = {
    avatar: false,
    email: false,
    phone: false
}

export default function Register() {
    const [serverErrors, setServerErrors] = useState(INITIAL_ERROR_VALUE)
    const navigate = useNavigate();

    const onRegister = async (values: any, { setSubmitting } : any) => {
        setSubmitting(true);
        setServerErrors(INITIAL_ERROR_VALUE)
       
        try {
            const response = await Api.User.register({
                ...values,
                avatar: JSON.parse(values.avatar),
            });


            ToastAndroid.showWithGravity(
                response.message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );

            navigate('/member-list');
    
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
            validationSchema={registerSchema}
            onSubmit={onRegister}
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
                <View style={{gap: 50}}>
                    <FlexWrapper>
                        <ImagePicker
                            sx={{ width: '100%' }}
                            value={values.avatar ? JSON.parse(values.avatar) : null}
                            error={(touched.avatar && errors.avatar) || serverErrors.avatar}
                            onBlur={handleBlur('avatar')}
                            onChange={value => {
                                const eventChange = handleChange('avatar')
                                if( value ) {
                                    eventChange(JSON.stringify(value))
                                } else {
                                    eventChange('')
                                }

                                setServerErrors(prevState => ({...prevState, avatar: false}))
                            }}
                            placeholderStyle={{
                                width: 140,
                                height: 140
                            }}
                            previewStyle={{
                                width: 140,
                                height: 140,
                            }}
                        />
                        <AuthInput
                            sx={{width: '48%'}}
                            label="নামের প্রথম অংশ"
                            placeholder="Ex: John"
                            onChangeText={handleChange('first_name')}
                            value={values.first_name}
                            error={touched.first_name && errors.first_name}
                            onBlur={handleBlur('first_name')}
                        />
                        
                        <AuthInput
                            sx={{width: '48%'}}
                            label="নামের শেষ অংশ"
                            placeholder="Ex: Doe"
                            onChangeText={handleChange('last_name')}
                            value={values.last_name}
                            error={touched.last_name && errors.last_name}
                            onBlur={handleBlur('last_name')}
                        />
                        
                        <AuthInput
                            sx={{width: '100%'}}
                            label="আপনার ইমেইল ঠিকানা লিখুন"
                            placeholder="Ex: Doe"
                            onChangeText={ev => {
                                handleChange('email')(ev);
                                setServerErrors(prevState => ({...prevState, email: false}))
                            }}
                            value={values.email}
                            error={(touched.email && errors.email) || serverErrors.email}
                            onBlur={handleBlur('email')}
                        />
                    
                        <AuthInput
                            sx={{width: '48%'}}
                            label="পাসওয়ার্ড লিখুন"
                            placeholder='********'
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                            error={touched.password && errors.password}
                            onBlur={handleBlur('password')}
                        />
                    
                        <AuthInput
                            sx={{width: '48%'}}
                            label="পাসওয়ার্ড নিশ্চিত করুন"
                            placeholder='********'
                            secureTextEntry={true}
                            onChangeText={handleChange('confirm_password')}
                            value={values.confirm_password}
                            error={touched.confirm_password && errors.confirm_password}
                            onBlur={handleBlur('confirm_password')}
                        />

                        <PhoneNumber 
                            sx={{width: '100%'}}
                            label="আপনার ফোন নম্বর লিখুন"
                            onChangeText={ev => {
                                handleChange('phone')(ev)
                                setServerErrors(prevState => ({...prevState, phone: false}))
                            }}
                            value={values.phone}
                            error={(touched.phone && errors.phone) || serverErrors.phone}
                            onBlur={handleBlur('phone')}
                        />

                        <DatePicker
                            sx={{width: '48%'}}
                            label="জন্ম তারিখ"
                            date={values.date_of_birth}
                            onDateChange={handleChange('date_of_birth')}
                            error={touched.date_of_birth && errors.date_of_birth}
                            onBlur={handleBlur('date_of_birth')}
                        />

                        <DropdownSelect
                            label="রক্তের গ্রুপ"
                            error={touched.blood_group && errors.blood_group}
                            onBlur={handleBlur('blood_group')}
                            labelStyle={{
                                fontFamily: 'Rubik-Regular',
                                fontSize: 16,
                                color: '#49687e',
                                marginBottom: 5,
                                display: 'block',
                                paddingTop: 0,
                                marginTop: 0,
                            }}
                            selectedValue={values.blood_group}
                            placeholder="গ্রুপ নির্বাচন করুন"
                            onValueChange={handleChange('blood_group')}
                            dropdownContainerStyle={{
                                width: '48%',
                                marginTop: 12,
                                height: 50,
                            }}
                            dropdownStyle={{
                                paddingVertical: 5,
                                paddingHorizontal: 10,
                                minHeight: 50,
                                backgroundColor: '#fff',
                                borderColor: '#bacddb',
                            }}
                            dropdownIconStyle={{
                                top: 20,
                                right: 15,
                            }}
                            checkboxControls={{
                                checkboxLabelStyle: {
                                    color: '#000'
                                }
                            }}
                            primaryColor="#ec1f27"
                            isMultiple={false}
                            options={BLOOD_GROUP}
                        />

                        <AuthInput
                            sx={{
                                height: 80,
                                width: '100%',
                            }}
                           inputStyle={{
                             minHeight: 80,
                             textAlignVertical: 'top',
                           }}
                            label="আপনার ঠিকানা লিখুন"
                            placeholder='ওয়ার্ড নং: ১, আলাদিপুর, রাজব...'
                            multiline={true}
                            numberOfLines={4}   
                            onChangeText={handleChange('location')}
                            value={values.location}
                            error={touched.location && errors.location}
                            onBlur={handleBlur('location')}
                        />

                    </FlexWrapper>
                    
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
                            <Text>
                                {isSubmitting ? 'লোড হচ্ছে...' : 'এখনই জমা দিন'} </Text>
                            { !isSubmitting && <Image source={require('@assets/images/angle-right.png')}/> }
                        </Paragraph>
                    </Button>
                </View>
            )}
        </Formik>
    )
}