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
}

export default function PhoneNumber( props: PropsWithChildren<PropsType> ) {
    const [isFocused, setIsFocused] = useState(false);

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
                >
                    <Paragraph
                        sx={{
                            fontSize: 16,
                            color: '#000',
                            fontFamily: 'Rubik-Regular',
                        }}
                    >
                        +880
                    </Paragraph>
                    <TextInput 
                        style={{
                            fontSize: 16,
                            fontFamily: 'Rubik-Regular'
                        }}
                        keyboardType={'phone-pad'}
                        onFocus={() => setIsFocused(true)} 
                        onBlur={() => setIsFocused(false)} 
                        placeholder="1742700000"
                    />
                </InputWrapper>
            </View>
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