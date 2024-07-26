import { Image } from "react-native"
import type { PropsWithChildren } from "react"
import type { ImageType } from "./types"
import { PreviewWrapper, Overlay } from "./style"
import { Button, Paragraph } from '@src/components'

type PropsType = {
    image: ImageType,
    sx?: Object,
    onRemove: () => void
}

export default function Preview( props: PropsWithChildren<PropsType> ) {
    return (
        <PreviewWrapper style={props.sx || {}}>
            <Image source={props.image} style={{width: '100%', height: '100%', borderRadius: 6}}/>
            <Overlay>
                <Button 
                    onPress={props.onRemove}
                    styles={{width: '100%', height: '100%'}}
                >
                    <Paragraph
                        sx={{
                            color: '#fff',
                            fontSize: 16,
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            borderRadius: 6,
                            width: '100%',
                            height: '100%',
                            textAlign: 'center',
                        }}
                    >Remove</Paragraph>
                </Button>
            </Overlay>
        </PreviewWrapper>
    )
}