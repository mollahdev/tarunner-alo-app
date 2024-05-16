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
    padding: 16px;
    background-color: #f9fafb;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
`;

export const Card = styled.View`
    padding: 16px;
    background-color: #fff;
    border-radius: 4px;
    flex: 1 1 150px;
    height: auto;
`;