import { Image, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { Wrapper } from './style';
import { COLORS } from '@src/global';

export default function AppLoader() {
    return (
        <Wrapper>
            <StatusBar hidden />
             <Image
                source={require('@assets/images/logo.jpeg')}
                style={{ width: 150, height: 150}}
            />
            <ActivityIndicator style={[styles.activityIndicator]} size="large" color={COLORS.primary}/>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: 20
    },
});