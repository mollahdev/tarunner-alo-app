import styled from "@emotion/native"

export const Wrapper = styled.View`
    gap: 8px;
`

type TextInputProps = {
    isFocused: boolean;
    error?:string;
}

export const InputWrapper = styled.View( (props: TextInputProps) => {
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
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: borderColor(),
        borderRadius: 8,
        transition: 'border-color 0.3s',
        borderWidth: 1,
        paddingHorizontal: 10,
        height: 50,
        width: '100%'
    }
} )