import { View } from 'react-native';
import { default as CropImagePicker } from 'react-native-image-crop-picker';
import { Wrapper } from './style';
import Placeholder from './placeholder';
import Preview from './preview';
import type { ImagePickerProps } from './types';
import type { PropsWithChildren } from 'react';
import { Paragraph } from '@src/components';

export default function ImagePicker( props: PropsWithChildren<ImagePickerProps> ) {
    const selectFile = async (ev: any) => {
        const res = await CropImagePicker.openPicker({
            width: 300,
            height: 300,
            mediaType: 'photo',
            cropping: true
        })

        props.onChange && props.onChange({
            uri: res.path,
            type: res.mime,
            name: res.filename || res.path.split('/').pop() || 'image.jpg',
        });

        if( props.onBlur && typeof props.onBlur === 'function' ) {
            props.onBlur(ev)
        }
    };

    const onRemove = () => {
        CropImagePicker.clean();
        props.onChange && props.onChange(null);
    }

    return (
        <View style={props.sx || {}}>
            <Wrapper>
                { props.value && <Preview onRemove={onRemove} sx={props.previewStyle} image={props.value}/>  }
                { !props.value && 
                    <Placeholder 
                    sx={{
                        ...(props.placeholderStyle || {}),
                        ...(props.error ? {
                            borderColor: '#ec1f27',
                            backgroundColor: '#ffeeee',
                        } : {})
                    }} 
                    onPress={selectFile} /> 
                }
                { props.error && 
                    <Paragraph
                    sx={{
                        fontSize: 13,
                        color: '#ec1f27',
                        marginTop: 2,
                    }}
                    >{props.error}</Paragraph>
                }
            </Wrapper>
        </View>
    )
}