import { View, Text, StyleSheet } from 'react-native';

export default function NewestAnnouncements() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>শীঘ্রই আসছে...</Text>
            <Text style={styles.text}>আমরা এই ফিচারটির উপর কাজ করছি এবং এটি খুব শীঘ্রই আপনার জন্য উপলব্ধ হবে। আপনার ধৈর্যের জন্য ধন্যবাদ। আমাদের টিম কঠোর পরিশ্রম করছে যাতে আমরা আপনাকে সেরা অভিজ্ঞতা দিতে পারি। অনুগ্রহ করে একটু অপেক্ষা করুন ।</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },

    title: {
        fontSize: 28,
        fontFamily: 'Rubik-Bold',
        marginBottom: 8,
        color: '#333',
        marginTop: '20%'
    },

    text: {
        fontSize: 16,
        fontFamily: 'Rubik-Regular',
        textAlign: 'center',
        lineHeight: 24,
        color: '#333'
    }
});