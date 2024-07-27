/**
 * Native dependencies 
 */ 
import { ScrollView, Modal, Image, ToastAndroid, ActivityIndicator, StyleSheet } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/**
 * Internal dependencies 
 */ 
import Header from './header';
// import Data from './data'
import Item from './Item';
import InfoCell from './infoCell';
import { ListWrapper, ModalContent, ModalOverlay, ModalOverlayClose } from './style';
import { Paragraph, EmptyState } from '@src/components';
import Api from '@src/services/api';
import { selectUsers, setUsers } from '@src/services/data/users';

export default function MemberList() {
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<RegisterUserApiResponse>();
    const [searchFocused, setSearchFocused] = useState(false);
    const members = useSelector(selectUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        Api.User.getList().then(response => {
            dispatch(setUsers(response.data));
        }).catch(error => {
            ToastAndroid.showWithGravity(
                error.message,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
            );
        });
    }, []);

    const filteredData = useMemo(() => {
        return members?.filter(item => {
            const name = `${item.first_name} ${item.last_name}`;
            return name.toLowerCase().includes(search.toLowerCase())
        });
    }, [search, members]);

    const showModal = ( item: RegisterUserApiResponse ) => {
        setSelectedItem(item);
        setModalVisible(true);
    }

    return (
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator
        >
            <Header search={ search } searchFocused={setSearchFocused} setSearch={setSearch} />
            { members === null &&  <ActivityIndicator style={[styles.activityIndicator]} size="large" color="#fc0e12"/> }
            
            <ListWrapper style={{opacity: searchFocused ? .5 : 1}}>
                { filteredData?.map(item => <Item onShowInfo={() => showModal(item)} key={item.id} {...item}/> )}
            </ListWrapper>

            { filteredData?.length === 0 && <EmptyState/>}

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
                                source={{uri: selectedItem.avatar}} 
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
                            <InfoCell label='Name' value={`${selectedItem.first_name} ${selectedItem.last_name}`}/>
                            <InfoCell label='Email' value={selectedItem.email}/>
                            <InfoCell label='Phone' value={`+${selectedItem.country_code}${selectedItem.phone}`}/>
                            <InfoCell label='Blood Group' value={selectedItem.blood_group}/>
                            <InfoCell label='Date of Birth' value={selectedItem.date_of_birth}/>
                            <InfoCell styles={{borderBottomWidth: 0}} label='Location' value={selectedItem.location}/>
                        </ModalContent>
                    ) }
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    activityIndicator: {
        marginTop: '50%'
    },
});