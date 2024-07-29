import { View, Text } from 'react-native';
import { EmptyState } from '@src/components';

export default function StarredAnnouncements() {
    return (
        <View style={{alignItems: 'center', paddingTop: '20%'}}>
            <EmptyState/>
        </View>
    )
}