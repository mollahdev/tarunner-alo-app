export type ImagePickerProps = {
    sx?: Object
    placeholderStyle?: Object
    previewStyle?: Object
    value: ImageType | null
    onChange?: (image: ImageType | null) => void
    error?: string | boolean;
    onBlur?: Function;
}
