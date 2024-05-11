import { View } from "react-native"
import { Link } from "react-router-native"
import { Paragraph } from "@src/components"

export default function SignInFooter() {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 6}}>
            <Paragraph 
                sx={{
                    color: '#83a1b7',
                    fontFamily: 'Rubik-Regular',
                    fontSize: 14,                        
                }}
            >Already have an account?</Paragraph>
            <Link to="login" underlayColor="transparent">
                <Paragraph sx={{
                    color: '#e64949',
                    fontFamily: 'Rubik-Bold',
                    fontSize: 14,
                }}>Sign In</Paragraph>
            </Link>
        </View>
    )
}