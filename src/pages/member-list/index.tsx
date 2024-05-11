import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import { Paragraph } from '@src/components';

export default function MemberList() {
    return (
        <View>
            <Link to="/login"><Text>Go Back</Text></Link>
            <Paragraph>Members Page</Paragraph>
        </View>
    )
}