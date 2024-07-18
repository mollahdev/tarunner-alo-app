import styled from "@emotion/native"

export const Wrapper = styled.View`
    gap: 8px;
`

type TextInputProps = {
    isFocused: boolean;
}

export const InputWrapper = styled.View( (props: TextInputProps) => {
    return {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: props.isFocused ? '#49687e' : '#bacddb',
        borderRadius: 8,
        transition: 'border-color 0.3s',
        borderWidth: 1,
        paddingLeft: 15,
        width: '82%'
    }
} )

export const TextInput = styled.TextInput( () => {
    return {
        paddingHorizontal: 10,
        height: 50,
        width: '80%',
        verticalAlign: 'middle',
        paddingVertical: 0,
        color: '#000',
    }
} )