import type { PropsWithChildren } from "react";
/**
 * Internal dependencies 
 */ 
import { Paragraph } from "@src/components";
import { Wrapper, TextInput } from "./style";

type PropsType = {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function AuthInput( props: PropsWithChildren<PropsType> ) {
  return (
    <Wrapper>
      <Paragraph sx={{fontSize: 16,fontFamily: 'Rubik-Regular'}}>{props.label}</Paragraph>
      <TextInput secureTextEntry={ props.secureTextEntry } placeholder={ props.placeholder }/>
    </Wrapper>
  );
}