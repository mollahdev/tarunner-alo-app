import { View, Text, StyleSheet, Image,  } from "react-native"
import { useNetInfo, addEventListener } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { useFetchInitialData } from "@src/hooks";


export default function InternetStatus() {
    const { isConnected } = useNetInfo();
    const fetchInitialData = useFetchInitialData()

    useEffect(() => {
        addEventListener(state => {
            if(state.isConnected) {
               fetchInitialData()
            }
          })
    }, [])

    if( isConnected === null || isConnected ) return null;

    return (
        <View style={style.container}>
            <Image style={style.img} source={require('@assets/images/warning.webp')}/>
            <Text style={style.text}>আপনার ইন্টারনেট সংযোগ নেই।</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        top: 0,
        left: 0,
        height: 60,
        zIndex: 9999,
        backgroundColor: '#fff0c0',
        paddingVertical: 8,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },

    img: {
        width: 30,
        height: 30
    },

    text: {
        fontFamily: 'Rubik-Medium',
        fontSize: 18,
        color: '#101010'
    }
})