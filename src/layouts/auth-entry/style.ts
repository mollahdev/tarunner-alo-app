import styled from "@emotion/native"
import { Link } from "react-router-native";

export const Wrapper = styled.View`
    padding: 40px 24px;
    gap: 20px;
    flex: 1;
    justify-content: center;
`;

export const Divider = styled.View`
    position: relative;
    align-items: center;
`

export const DividerLine = styled.View`
    height: 1px;
    background-color: #bacddb;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    marginTop: 1px;
`

export const ViewMemberButton = styled(Link)`
    borderColor: #f3bfbf;
    borderWidth: 1px;
    padding: 14px;
    borderRadius: 8px;
    align-items: center;
`