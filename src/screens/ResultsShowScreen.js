import React, {useState, useEffect} from 'react'
import { View, Text , StyleSheet, FlatList} from 'react-native'
import yelp from '../api/yelp';
export default function ResultsShowScreen({navigation}) {
    
    
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id');
    
    const getResult =async (id)=>{
      const response =  await yelp.get(`/${id}`)
      setResult(response.data)  
    }

    useEffect(() => {
        getResult()
        
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=> photo}
                renderItem={({item})=>{
                    return <Image style={{height: 200, width: 300}} source={{uri: item }} />
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({})