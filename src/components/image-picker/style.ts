import styled from "@emotion/native"

export const Wrapper = styled.View`
    border-radius: 8px;
`;

export const PlaceholderWrapper = styled.View`
    border: 1px dashed #d9d9d9;
    padding: 8px;
    background-color: #00000005;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    border-radius: 8px;
    gap: 2px;
`;

export const PreviewWrapper = styled.View`
    position: relative;
    border: 3px solid #ddd;
    overflow: hidden;
    border-radius: 8px;
`;

export const Overlay = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #00000090;
    justify-content: center;
    align-items: center;
    z-index: 1;
`