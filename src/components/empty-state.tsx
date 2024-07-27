import { View, Text, StyleSheet, Image } from 'react-native';

export default function EmptyState() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('@assets/images/empty-box.jpg')} />
            <Text style={styles.text}>কোনো তথ্য পাওয়া যায়নি, দয়া করে পরে আবার চেষ্টা করুন।</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 250,
        height: 250,
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        maxWidth: 300,
    },
});