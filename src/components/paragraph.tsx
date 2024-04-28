import { Text } from "react-native";
import styled from "@emotion/native"
import { ReactNativeStyle } from "@emotion/native";

const Paragraph = styled(Text)( ( props: { sx?: ReactNativeStyle } ) => {
    return {
        fontSize: 16,
        color: '#101010',
        ...(props.sx  ? props.sx : {})
    }
} );

export default Paragraph;