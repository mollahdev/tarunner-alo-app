import type { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { useState } from "react";
/**
 * Internal dependencies 
 */ 
import { Paragraph } from "@src/components";
import { Wrapper, TextInput } from "./style";

type PropsType = {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  sx?: Object;
  onChangeText?: (text: string) => void;
  value?: string;
  multiline?: boolean;
  numberOfLines?: number;
  inputStyle?: Object;
  error?: string | boolean;
  onBlur?: Function;
}

export default function AuthInput( props: PropsWithChildren<PropsType> ) {
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
      <TextInput 
        style={props.inputStyle || {}}
        isFocused={isFocused}
        error={props.error}
        value={props.value}
        multiline={props.multiline}
        placeholderTextColor="#91a5b3"
        numberOfLines={props.numberOfLines}
        onFocus={() => setIsFocused(true)} 
        onBlur={(ev) => {
          setIsFocused(false)
          if (props.onBlur && typeof props.onBlur === 'function') {
            props.onBlur(ev);
          }
        }} 
        secureTextEntry={ props.secureTextEntry } 
        placeholder={ props.placeholder }
        onChangeText={onChangeText}
      />
      { props.error && 
        <Paragraph
          sx={{
            fontSize: 13,
            color: '#ec1f27',
            marginTop: -4,
          }}
        >{props.error}</Paragraph>
      }
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  labelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})