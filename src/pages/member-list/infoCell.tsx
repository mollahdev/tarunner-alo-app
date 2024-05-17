import type { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";
import { Paragraph } from '@src/components';

type PropsType = {
    label: string;
    value: string | number;
    styles?: any;
}

export default function InfoCell( props: PropsWithChildren<PropsType> ) {
    return (
        <View style={[styles.container, props.styles]}>
            <Paragraph style={styles.label}>{props.label}</Paragraph>
            <Paragraph>:</Paragraph>
            <Paragraph style={styles.value}>{props.value}</Paragraph>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#bacddb',
        gap: 10,
    },
    label: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    value: {
        flex: 2,
        fontSize: 16,
    },
});