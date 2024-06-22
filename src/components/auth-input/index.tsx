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
}

export default function AuthInput( props: PropsWithChildren<PropsType> ) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrapper style={props.sx || {}}>
      <View style={ styles.labelWrapper }>
        <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular'}}>{props.label}</Paragraph>
        {props.children}
      </View>
      <TextInput 
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)} 
        onBlur={() => setIsFocused(false)} 
        secureTextEntry={ props.secureTextEntry } 
        placeholder={ props.placeholder }
      />
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