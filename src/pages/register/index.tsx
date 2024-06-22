/**
 * Native Dependencies 
 */ 
import { View, Text, Image, ImageBackground } from 'react-native';
import { useNavigate } from 'react-router-native';
import { default as DropdownSelect } from 'react-native-input-select';
import { useState } from 'react';
/**
 * Internal dependencies 
 */
import storage from '@src/services/storage';
import {AuthInput, Button, Paragraph, PhoneNumber, DatePicker } from '@src/components';
import { FlexWrapper } from './style';


export default function Register() {
    const navigate = useNavigate();
    const [bloodGroup, setBloodGroup] = useState<string | null>(null);

    const onRegister = async () => {
        storage.set('token', '123456');
        navigate('/', { replace: true });
    }

    return (
        <View style={{gap: 40}}>
            <FlexWrapper>
                <AuthInput
                    sx={{width: '48%'}}
                    label="First Name"
                    placeholder="Ex: John"
                />
                
                <AuthInput
                    sx={{width: '48%'}}
                    label="Last Name"
                    placeholder="Ex: Doe"
                />
                
                <AuthInput
                    sx={{width: '100%'}}
                    label="Email Address"
                    placeholder="Ex: Doe"
                />
            
                <AuthInput
                    sx={{width: '48%'}}
                    label="Password"
                    placeholder='********'
                    secureTextEntry={true}
                />
               
                <AuthInput
                    sx={{width: '48%'}}
                    label="Confirm Password"
                    placeholder='********'
                    secureTextEntry={true}
                />

                <PhoneNumber 
                    sx={{width: '100%'}}
                    label="Phone Number"
                />

                <DatePicker
                    sx={{width: '48%'}}
                    label="Date of Birth"
                />

                <DropdownSelect
                    label="Blood Group"
                    labelStyle={{
                        fontFamily: 'Rubik-Regular',
                        fontSize: 16,
                        color: '#49687e',
                        marginBottom: 10
                    }}
                    selectedValue={bloodGroup}
                    placeholder="Select Group"
                    onValueChange={(value: any) => setBloodGroup(value)}
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
                    options={[
                        { value: 'A+', label: 'A+' },
                        { value: 'A-', label: 'A-' },
                        { value: 'B+', label: 'B+' },
                        { value: 'B-', label: 'B-' },
                        { value: 'AB+', label: 'AB+' },
                        { value: 'AB-', label: 'AB-' },
                        { value: 'O+', label: 'O+' },
                        { value: 'O-', label: 'O-' },
                    ]}
                />

            </FlexWrapper>
            
            <Button onPress={onRegister}>
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
                    }}
                >
                    <Text>Submit Now  </Text>
                    <Image source={require('@assets/images/angle-right.png')}/>
                </Paragraph>
            </Button>
        </View>
    )
}