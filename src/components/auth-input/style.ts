import styled from "@emotion/native"

export const Wrapper = styled.View`
    gap: 8px;
`

export const TextInput = styled.TextInput( (props) => {
    return {
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        borderColor: '#49687e',
        height: 50
    }
} )