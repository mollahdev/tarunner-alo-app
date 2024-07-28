import styled from "@emotion/native"

export const Wrapper = styled.View`
    gap: 8px;
`

type TextInputProps = {
    isFocused: boolean;
    error?: string | boolean;
}

export const TextInput = styled.TextInput( (props: TextInputProps) => {
     const borderColor = () => {
        if (props.error) {
            return '#ec1f27'
        }

        if (props.isFocused) {
            return '#49687e'
        }

        return '#bacddb'
     }

    return {
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        transition: 'border-color 0.3s',
        borderColor: borderColor(),
        height: 50,
        color: props.error ? '#ec1f27' : '#000',
        fontSize: 16,
    }
} )