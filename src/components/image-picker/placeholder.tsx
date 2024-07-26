import { PlaceholderWrapper } from "./style"
import { Paragraph } from '@src/components'
import { TouchableWithoutFeedback } from 'react-native'

type Props = {
    onPress: (ev: any) => void,
    sx?: Object
}

export default function Placeholder( props: Props ) {
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <PlaceholderWrapper style={props.sx || {}}>
                <Paragraph sx={{
                    fontSize: 30,
                }}>+</Paragraph>
                <Paragraph sx={{
                    fontSize: 16
                }}>Upload Photo</Paragraph>
            </PlaceholderWrapper>
        </TouchableWithoutFeedback>
        
    )
}