export type ImageType = {
    uri: string
    width: number
    height: number
    mime: string
}

export type ImagePickerProps = {
    sx?: Object
    placeholderStyle?: Object
    previewStyle?: Object
    value: ImageType | null
    onChange?: (image: ImageType | null) => void
    error?: string
}
