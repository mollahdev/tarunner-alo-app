/**
 * Native dependencies 
 */ 
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import type { PropsWithChildren } from "react";
import type { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
/**
 * External dependencies 
 */ 
import { useNavigate } from 'react-router-native';
/**
 * Internal dependencies 
 */
import { HeaderWrapper, SearchInput, BackButton } from './style';


type PropsType = {
    search: string;
    setSearch: (ev: string) => void;
    searchFocused: (ev: boolean) => void;
}

export default function Header( props: PropsWithChildren<PropsType> ) {
    const { search, setSearch } = props;
    const navigate = useNavigate();

    const onSearch = (ev: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setSearch(ev.nativeEvent.text);
    }

    return (
        <View style={ styles.shadowProp }>
            <HeaderWrapper>
                <TouchableWithoutFeedback onPress={() => navigate(-1)}>
                    <BackButton style={{ fontFamily: 'Rubik-SemiBold' }}>ফিরে যান</BackButton>
                </TouchableWithoutFeedback>
                <SearchInput 
                    value={search} 
                    onChange={onSearch}
                    onFocus={() => props.searchFocused(true)}
                    onBlur={() => props.searchFocused(false)}
                    placeholderTextColor="#91a5b3"
                    placeholder="সদস্যদের খুঁজুন" />
            </HeaderWrapper>
        </View>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        elevation: 8,
        backgroundColor: 'white'
    },
});