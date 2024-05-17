import type { PropsWithChildren } from "react";
import { TouchableOpacity } from "react-native";
/**
 * Internal dependencies 
 */ 

type Props = {
    styles?: any;
    onPress?: () => void;
}

export default function Button( props: PropsWithChildren<Props> ) {
    const onPress = () => {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <TouchableOpacity style={ props.styles || {} } onPress={onPress} activeOpacity={0.8}>
            { props.children }
        </TouchableOpacity>
    )
}