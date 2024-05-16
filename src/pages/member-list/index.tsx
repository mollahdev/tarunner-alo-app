import { ScrollView } from 'react-native';
/**
 * Internal dependencies 
 */ 
import Header from './header';
import Data from './data'
import Item from './Item';
import { ListWrapper } from './style';

export default function MemberList() {
    return (
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator
        >
            <Header/>
            <ListWrapper>
                { Data.map((item, index) => <Item key={index} {...item}/> )}
            </ListWrapper>
        </ScrollView>
    )
}