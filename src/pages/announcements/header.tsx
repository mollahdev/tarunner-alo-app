import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
/**
 * External dependencies
 */ 
import LinearGradient from 'react-native-linear-gradient';
import { useLocation, useNavigate } from 'react-router-native';
import { Link } from 'react-router-native';
/**
 * Internal dependencies 
 */ 
import { HeaderWrapper, AnnouncePageLink, TabWrapper } from "./style";
import { Paragraph } from "@src/components";
import { COLORS } from '@src/global';

export default function Header() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const linkStyles: Record<string, any> = {
        '/announcements/archived' : [styles.link],
        '/announcements/starred' : [styles.link],
        '/announcements' : [styles.link],
    }

    if( linkStyles[pathname] ) {
        linkStyles[pathname].push(styles.linkActive)
    }

    return (
        <LinearGradient colors={[COLORS.primaryLight, COLORS.primaryDeep]}>
             <TouchableWithoutFeedback onPress={() => navigate(-1)}>
                <Paragraph style={styles.backButton}>ফিরে যান</Paragraph>
            </TouchableWithoutFeedback>
            <HeaderWrapper>
                <Paragraph
                    sx={{
                        color: COLORS.white,
                        textAlign: 'center',
                        fontSize: 20,
                        fontWeight: 'bold',
                        paddingTop: 30,
                    }}
                >আমাদের ঘোষণা</Paragraph>

                <TabWrapper>
                    <AnnouncePageLink underlayColor="transparent" to="/announcements/starred" replace>
                        <Paragraph style={linkStyles['/announcements/starred']}>তারকাচিহ্নিত</Paragraph>
                    </AnnouncePageLink>
                    <AnnouncePageLink underlayColor="transparent" to="/announcements" replace>
                        <Paragraph style={linkStyles['/announcements']}>সর্বশেষ</Paragraph>
                    </AnnouncePageLink>
                    <AnnouncePageLink underlayColor="transparent" to="/announcements/archived" replace>
                        <Paragraph style={linkStyles['/announcements/archived']}>আর্কাইভড</Paragraph>
                    </AnnouncePageLink>
                </TabWrapper>
            </HeaderWrapper>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 100,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1,
        fontSize: 16,
        color: COLORS.white,
    },

    link: {
        color: COLORS.white,
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 5,
        textAlign: 'center',
        cursor: 'pointer',
    },

    linkActive: {
        color: COLORS.primary,
        backgroundColor: COLORS.white,
        fontWeight: 'bold',
    }
});