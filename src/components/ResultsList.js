import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from '../../ResultsDetail'
export default function ResultsList({ title, results, navigation }) {
    
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('ResultsShow', {id:item.id}) }}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>
                    )
                }}
            />
            {/* <Text>Results: {results.length}</Text> */}
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});
