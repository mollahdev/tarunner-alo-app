import { View } from "react-native"
import { Link } from "react-router-native"
import { Paragraph } from "@src/components"

export default function RegisterFooter() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 6}}>
            <Paragraph 
                sx={{
                    color: '#83a1b7',
                    fontFamily: 'Rubik-Regular',
                    fontSize: 16,                        
                }}
            >আপনার কি কোনো অ্যাকাউন্ট নেই?</Paragraph>
            <Link to="register" underlayColor="transparent">
                <Paragraph sx={{
                    color: '#e64949',
                    fontFamily: 'Rubik-Bold',
                    fontSize: 16,
                }}>নিবন্ধন করুন</Paragraph>
            </Link>
        </View>
    )
}