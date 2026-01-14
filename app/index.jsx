import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Index</Text>
            <Link href="/about" style={styles.link}>About</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 30
    },
    link: {
        textDecorationColor: 'dodgerblue',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        color: 'dodgerblue'
    }
})

export default Index;
