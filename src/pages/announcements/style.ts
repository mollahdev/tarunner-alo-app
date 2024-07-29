import styled from '@emotion/native';
import { COLORS } from '@src/global';
import { Link } from 'react-router-native';

export const HeaderWrapper = styled.View`
    padding: 10px;
    height: 140px;
    justify-content: space-between;
    gap: 20px;
`;

export const Wrapper = styled.View`
    flex: 1;
`;

export const TabWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
`;

export const AnnouncePageLink = styled(Link)`
    align-items: center;
`