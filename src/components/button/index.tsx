import type { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
/**
 * Internal dependencies 
 */ 

export default function Button( props: PropsWithChildren ) {
    const onPress = () => {}

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            { props.children }
        </TouchableOpacity>
    )
}