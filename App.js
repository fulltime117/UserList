import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import { Restaurant, OrderDelivery } from './screens'
import Tabs from './navigation/tabs'
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

const App = () => {
    return (
        <SafeAreaView>
            <Text>Hello World</Text>
        </SafeAreaView>
    )
}

export default App;