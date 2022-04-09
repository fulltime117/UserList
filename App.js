import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, Text, SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView>
            <Text>Hello World</Text>
        </SafeAreaView>
    )
}

export default App;