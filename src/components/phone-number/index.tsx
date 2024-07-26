import type { PropsWithChildren } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useState } from "react";
/**
 * Internal dependencies 
 */ 
import { Paragraph } from "@src/components";
import { Wrapper, TextInput, InputWrapper } from "./style";

type PropsType = {
    label: string;
    sx?: Object;
    onChangeText?: (text: string) => void;
    value?: string;
    error?: string | boolean;
    onBlur?: Function;
}

export default function PhoneNumber( props: PropsWithChildren<PropsType> ) {
    const [isFocused, setIsFocused] = useState(false);

    const onChangeText = (text: string) => {
        if (props.onChangeText && typeof props.onChangeText === 'function') {
            props.onChangeText(text);
        }
    };

    return (
        <Wrapper style={props.sx || {}}>
            <View style={ styles.labelWrapper }>
                <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular'}}>{props.label}</Paragraph>
                {props.children}
            </View>
            <View style={styles.phoneWrapper}>
                <Image style={styles.flag} source={require('@assets/images/bangladesh.webp')}/>
                <InputWrapper
                    isFocused={isFocused}
                    error={props.error}
                >
                    <Paragraph
                        sx={{
                            fontSize: 16,
                            color: props.error ? '#ec1f27' : '#000',
                            fontFamily: 'Rubik-Regular',
                        }}
                    >
                        +880
                    </Paragraph>
                    <TextInput 
                        style={{
                            fontSize: 16,
                            color: props.error ? '#ec1f27' : '#000',
                            fontFamily: 'Rubik-Regular'
                        }}
                        keyboardType={'phone-pad'}
                        onFocus={() => setIsFocused(true)} 
                        onBlur={(ev) => {
                            setIsFocused(false);
                            if (props.onBlur && typeof props.onBlur === 'function') {
                                props.onBlur(ev);
                            }
                        }} 
                        placeholder="1742700000"
                        onChangeText={onChangeText}
                        value={props.value}
                    />
                </InputWrapper>
            </View>
            { props.error && 
                <Paragraph
                sx={{
                    fontSize: 13,
                    color: '#ec1f27',
                    marginTop: -2,
                    width: '100%',
                }}
                >{props.error}</Paragraph>
            }
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    labelWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    phoneWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    flag: {
        width: 50,
        height: 45,
        borderRadius: 3,
        marginRight: 10
    }
})