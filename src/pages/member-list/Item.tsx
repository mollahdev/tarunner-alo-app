/**
 * Native dependencies 
 */ 
import type { PropsWithChildren } from "react";
import { Image, StyleSheet, View, Linking} from "react-native";
/**
 * Internal dependencies 
 */ 
import type { Member } from './data';
import { Card } from './style';
import { Paragraph, Button } from '@src/components';

type PropsType = {
    onShowInfo: () => void;
}

export default function Item( props: PropsWithChildren<Member & PropsType> ) {
    const onCall = () => {
        Linking.openURL(`tel:${props.phone}`);
    }

    return (
        <Card style={styles.shadowProp}>
            <Image
                source={props.profile}
                resizeMode="cover"
                style={ styles.profileImage }
            />
            <Paragraph style={styles.name}>{props.name}</Paragraph>
            <View style={styles.actionContent}>
                <Button styles={[styles.button, styles.callButton]} onPress={onCall}>
                    <Image 
                        style={{width: 20, height: 20}}
                        source={require('@assets/images/call.webp')} 
                    />
                    <Paragraph sx={{fontSize: 16}}>Call</Paragraph>
                </Button>
                <Button styles={[styles.button, styles.infoButton]} onPress={props.onShowInfo}>
                    <Image 
                        style={{width: 20, height: 20}}
                        source={require('@assets/images/info.png')} 
                    />
                    <Paragraph sx={{fontSize: 16}}>Info</Paragraph>
                </Button>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        elevation: 2,
        backgroundColor: 'white',
    },
    profileImage: {
        width: '100%',
        height: 180,
    },
    name: {
        fontFamily: 'Rubik-SemiBold', 
        fontSize: 17, 
        textAlign: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        gap: 6,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    callButton: {
        borderColor: '#0bc215'
    },
    infoButton: {
        borderColor: '#1c97f3'
    },
    actionContent: {
        padding: 10,
        paddingBottom: 14,
        flexDirection: 'row',
        gap: 6,
        marginTop: 'auto'
    }
});