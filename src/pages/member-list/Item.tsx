import type { PropsWithChildren } from "react";
import type { Member } from './data';

import { Image, StyleSheet } from "react-native";
import { Card } from './style';
import { Paragraph } from '@src/components';

export default function Item( props: PropsWithChildren<Member> ) {
    return (
        <Card style={styles.shadowProp}>
            <Image
                source={props.profile}
                style={{ width: 80, height: 80, borderRadius: 80, marginBottom: 10 }}
            />
            <Paragraph style={{ fontFamily: 'Rubik-SemiBold', fontSize: 18 }}>{props.name}</Paragraph>
            <Paragraph>{props.email}</Paragraph>
        </Card>
    )
}

const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.4)',
        elevation: 2,
        backgroundColor: 'white',
    },
});