import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function ResultsDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: result.image_url }}
                style={styles.image}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text >{result.rating} Stars, {result.review_count} Reviews</Text>


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        borderRadius: 4,
        width: 250,
        height: 120, 
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',

    }

});