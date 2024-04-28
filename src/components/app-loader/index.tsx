import { Image } from 'react-native';
import { Wrapper } from './style';
import { Paragraph } from '@src/components';

export default function AppLoader() {
    return (
        <Wrapper>
             <Image
                source={require('@assets/images/logo.jpeg')}
                style={{ width: 150, height: 150}}
            />
            <Paragraph sx={{
                fontWeight: 'bold',
                fontSize: 20,
            }}>LOADING...</Paragraph>
        </Wrapper>
    );
}