/**
 * Native Dependencies 
 */ 
import { View, Text, Image } from 'react-native';
import { default as DropdownSelect } from 'react-native-input-select';
import { Formik } from 'formik';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import {AuthInput, Button, Paragraph, PhoneNumber, DatePicker } from '@src/components';
import { FlexWrapper } from './style';
import { INITIAL_VALUES, BLOOD_GROUP } from './constants';


export default function Register() {

    const onRegister = (values: any, { setSubmitting } : any) => {
        console.log(values);
        // clear the form

        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={onRegister}
        >
                {({
                values,
                errors,
                handleChange,
                handleSubmit,
                isSubmitting,
            }) => (
                <View style={{gap: 40}}>
                    <FlexWrapper>
                        <AuthInput
                            sx={{width: '48%'}}
                            label="First Name"
                            placeholder="Ex: John"
                            onChangeText={handleChange('first_name')}
                            value={values.first_name}
                        />
                        
                        <AuthInput
                            sx={{width: '48%'}}
                            label="Last Name"
                            placeholder="Ex: Doe"
                            onChangeText={handleChange('last_name')}
                            value={values.last_name}
                        />
                        
                        <AuthInput
                            sx={{width: '100%'}}
                            label="Email Address"
                            placeholder="Ex: Doe"
                            onChangeText={handleChange('email')}
                            value={values.email}
                        />
                    
                        <AuthInput
                            sx={{width: '48%'}}
                            label="Password"
                            placeholder='********'
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                    
                        <AuthInput
                            sx={{width: '48%'}}
                            label="Confirm Password"
                            placeholder='********'
                            secureTextEntry={true}
                            onChangeText={handleChange('confirm_password')}
                            value={values.confirm_password}
                        />

                        <PhoneNumber 
                            sx={{width: '100%'}}
                            label="Phone Number"
                            onChangeText={handleChange('phone')}
                            value={values.phone}
                        />

                        <DatePicker
                            sx={{width: '48%'}}
                            label="Date of Birth"
                            date={values.date_of_birth}
                            onDateChange={handleChange('date_of_birth')}
                        />

                        <DropdownSelect
                            label="Blood Group"
                            labelStyle={{
                                fontFamily: 'Rubik-Regular',
                                fontSize: 16,
                                color: '#49687e',
                                marginBottom: 10
                            }}
                            selectedValue={values.blood_group}
                            placeholder="Select Group"
                            onValueChange={handleChange('blood_group')}
                            dropdownContainerStyle={{
                                width: '48%',
                                marginTop: 8,
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
                            primaryColor="#ec1f27"
                            isMultiple={false}
                            options={BLOOD_GROUP}
                        />

                    </FlexWrapper>
                    
                    <Button onPress={handleSubmit}>
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
                                {isSubmitting ? 'Loading...' : 'Submit Now'} </Text>
                            { !isSubmitting && <Image source={require('@assets/images/angle-right.png')}/> }
                        </Paragraph>
                    </Button>
                </View>
            )}
        </Formik>
    )
}