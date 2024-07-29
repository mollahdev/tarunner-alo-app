/**
 * Native dependencies 
 */ 
import { ScrollView, Modal, Image, ToastAndroid, ActivityIndicator, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
/**
 * External dependencies 
*/ 
import { useSelector, useDispatch } from 'react-redux';
/**
 * Internal dependencies 
 */ 
import Header from './header';
import Item from './Item';
import InfoCell from './infoCell';
import Api from '@src/services/api';
import { ListWrapper, ModalContent, ModalOverlay, ModalOverlayClose } from './style';
import { Paragraph, EmptyState } from '@src/components';
import { selectUsers, setUsers } from '@src/services/data/users';
import { COLORS } from '@src/global';

export default function MemberList() {
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<ProfileApiResponse>();
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

    const showModal = ( item: ProfileApiResponse ) => {
        setSelectedItem(item);
        setModalVisible(true);
    }

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: members?.length === 0 ? 1 : 0}}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator
        >
            <Header search={ search } searchFocused={setSearchFocused} setSearch={setSearch} />
            { members === null &&  <ActivityIndicator style={[styles.activityIndicator]} size="large" color={COLORS.primary}/> }
            
            <ListWrapper style={{opacity: searchFocused ? .5 : 1}}>
                { filteredData?.map(item => <Item onShowInfo={() => showModal(item)} key={item.id} {...item}/> )}
            </ListWrapper>

            { members?.length === 0 && <EmptyState/>}

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
                            >সদস্যের তথ্য</Paragraph>
                            <InfoCell label='নাম' value={`${selectedItem.first_name} ${selectedItem.last_name}`}/>
                            <InfoCell label='ইমেইল' value={selectedItem.email}/>
                            <InfoCell label='ফোন' value={`+${selectedItem.country_code}${selectedItem.phone}`}/>
                            <InfoCell label='রক্তের গ্রুপ' value={selectedItem.blood_group}/>
                            <InfoCell label='জন্ম তারিখ' value={selectedItem.date_of_birth}/>
                            <InfoCell styles={{borderBottomWidth: 0}} label='অবস্থান' value={selectedItem.location}/>
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