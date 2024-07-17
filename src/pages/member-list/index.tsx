/**
 * Native dependencies 
 */ 
import { ScrollView, Modal, Image } from 'react-native';
import { useState, useMemo } from 'react';
/**
 * Internal dependencies 
 */ 
import Header from './header';
import Data from './data'
import Item from './Item';
import InfoCell from './infoCell';
import { ListWrapper, ModalContent, ModalOverlay, ModalOverlayClose } from './style';
import { Paragraph } from '@src/components';
import type { Member } from './data';

export default function MemberList() {
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<Member>();
    const [searchFocused, setSearchFocused] = useState(false);

    const filteredData = useMemo(() => {
        return Data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }, [search]);

    const showModal = ( item: Member ) => {
        setSelectedItem(item);
        setModalVisible(true);
    }

    return (
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator
        >
            <Header search={ search } searchFocused={setSearchFocused} setSearch={setSearch} />
            <ListWrapper style={{opacity: searchFocused ? .5 : 1}}>
                { filteredData.map(item => <Item onShowInfo={() => showModal(item)} key={item.id} {...item}/> )}
            </ListWrapper>
            { modalVisible && <ModalOverlay/>}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                    <ModalOverlayClose onPress={() => setModalVisible(!modalVisible)}/>
                    { selectedItem && (
                        <ModalContent>
                            <Image 
                                source={selectedItem.profile} 
                                resizeMode="cover"
                                style={{
                                    width: 100, 
                                    height: 100,
                                    borderRadius: 50,
                                    transform: [{translateY: -50}],
                                    alignSelf: 'center',
                                    borderWidth: 4,
                                    borderColor: '#fff',
                                    position: 'absolute',
                                    backgroundColor: '#fff',
                                }}
                            />
                            <Paragraph 
                                style={{
                                    textAlign: 'center', 
                                    fontSize: 20,
                                    marginTop: 50,
                                    marginBottom: 20,
                                    fontWeight: 'bold',
                                }}
                            >Member Information</Paragraph>
                            <InfoCell label='Name' value={selectedItem.name}/>
                            <InfoCell label='Email' value={selectedItem.email}/>
                            <InfoCell label='Phone' value={selectedItem.phone}/>
                            <InfoCell label='Blood Group' value={selectedItem.blood}/>
                            <InfoCell label='Date of Birth' value={selectedItem.date_of_birth}/>
                            <InfoCell styles={{borderBottomWidth: 0}} label='Location' value={`Holding ${selectedItem.holding}, ward ${selectedItem.ward}, village ${selectedItem.village}`}/>
                        </ModalContent>
                    ) }
            </Modal>
        </ScrollView>
    )
}