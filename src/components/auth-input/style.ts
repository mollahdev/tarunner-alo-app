import styled from "@emotion/native"

export const Wrapper = styled.View`
    gap: 8px;
`

type TextInputProps = {
    isFocused: boolean;
}

export const TextInput = styled.TextInput( (props: TextInputProps) => {
    return {
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        transition: 'border-color 0.3s',
        borderColor: props.isFocused ? '#49687e' : '#bacddb',
        height: 50,
        color: '#000',
        fontSize: 16,
    }
} )