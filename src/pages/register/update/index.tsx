/**
 * Native dependencies 
 */ 
import { StatusBar, Image, View, Linking } from 'react-native';
import { useEffect } from 'react';
/**
 * External dependencies 
 */
import { useNavigate } from 'react-router-native';
/**
 * Internal dependencies 
 */
import { useAppMeta } from '@src/hooks';
import { Wrapper, Content, UpdateButton } from './style';
import { Paragraph } from '@src/components';

export default function Update() {
    const navigate = useNavigate();
    const meta = useAppMeta();

    useEffect(() => {
        if( meta.currentVersion === meta.version ) {
            navigate('/', { replace: true });
        }
    }, [meta]);

    const onDownload = () => {
        if( meta.download_link ) {
            Linking.openURL(meta.download_link + `?cv=${meta.currentVersion}`);
        }
    };

    return (
        <Wrapper>
            <View>
                <StatusBar hidden />
                <Image 
                    source={require('@assets/images/rocket.webp')}
                    style={{
                        width: '100%',
                        height: 300,
                        marginBottom: 10
                    }}
                />
            </View>
            <Content>
                <View style={{alignItems: 'center'}}>
                    <Paragraph
                        sx={{
                            fontSize: 18,
                            marginTop: 10,
                            textAlign: 'center',
                            color: '#1599e9',
                            backgroundColor: '#eaf6fc',
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            borderRadius: 50,
                            fontFamily: 'Rubik-SemiBold'
                        }}
                    >Latest Version: {meta.version}</Paragraph>
                    <Paragraph
                        sx={{
                            fontSize: 22,
                            textAlign: 'center',
                            fontFamily: 'Rubik-Medium',
                            lineHeight: 34,
                            padding: 10
                        }}
                    >
                        আপনি বর্তমানে অ্যাপটির {meta.currentVersion} সংস্করণ ব্যবহার করছেন যা অপ্রচলিত। অ্যাপটি ব্যবহার চালিয়ে যেতে দয়া করে সর্বশেষ সংস্করণে আপডেট করুন।
                    </Paragraph>
                </View>
                <UpdateButton
                    activeOpacity={0.8}
                    onPress={onDownload}
                >
                    <Paragraph
                        sx={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Rubik-Medium',
                            paddingHorizontal: 40,
                            paddingVertical: 15
                        }}
                    >
                         Download Now
                    </Paragraph>
                </UpdateButton>
            </Content>
        </Wrapper>
    )
}