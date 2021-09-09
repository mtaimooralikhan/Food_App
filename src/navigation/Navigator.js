import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import ResultsShowScreen from '../screens/ResultsShowScreen';
const Stack = createNativeStackNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

//expo/ngrok@^4.1.0