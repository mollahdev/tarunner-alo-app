import { Link } from 'react-router-native';
import { HeaderWrapper, SearchInput, BackButton } from './style';
import { View, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View style={ styles.shadowProp }
        >
            <HeaderWrapper>
                <Link underlayColor="transparent" to="/login"><BackButton style={{ fontFamily: 'Rubik-SemiBold' }}>Go Back</BackButton></Link>
                <SearchInput placeholder="Search members" />
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