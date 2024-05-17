import styled from '@emotion/native';

export const HeaderWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 16px 8px;
    gap: 10px;
    background-color: #fff;
`;

export const SearchInput = styled.TextInput`
    border: 1px solid #bacddb;
    padding: 10px 15px;
    flex: 1;
    height: 45px;
    border-radius: 6px;
    font-size: 16px;
    background-color: #fff;
`;

export const BackButton = styled.Text`
    background-color: #fc0e12;
    padding: 10px 20px;
    height: 46px;
    color: #fff;
    font-size: 16px;
    border-radius: 6px;
`;

export const ListWrapper = styled.View`
    padding: 10px;
    background-color: #f9fafb;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const Card = styled.View`
    background-color: #fff;
    border-radius: 4px;
    flex: 1 0 150px;
    height: auto;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    align-items: center;
`;

export const ModalOverlay = styled.View`
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    flex: 1;
    bottom: 0;
`;

export const ModalOverlayClose = styled.Pressable`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalContent = styled.View`
    background-color: #fff;
    min-height: 450px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 20px;
`;