import { Image, ActivityIndicator, StyleSheet, StatusBar } from 'react-native';
import { Wrapper } from './style';

export default function AppLoader() {
    return (
        <Wrapper>
            <StatusBar hidden />
             <Image
                source={require('@assets/images/logo.jpeg')}
                style={{ width: 150, height: 150}}
            />
            <ActivityIndicator style={[styles.activityIndicator]} size="large" color="#fc0e12"/>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: 20
    },
});