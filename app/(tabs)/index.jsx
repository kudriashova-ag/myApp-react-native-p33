import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import {PRODUCTS} from '../../data/products';
import ProductCard from '../../src/components/ProductCard';

const Index = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={PRODUCTS}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                renderItem={({item})=><ProductCard product={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20
    },
    row: {
        justifyContent: 'space-between',
        paddingHorizontal: 10
    }
})

export default Index;
