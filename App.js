// In App.js in a new project

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./components/views/HomeScreen";

function SobreScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home"  component={HomeScreen} />
                <Stack.Screen name="Sobre" component={SobreScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
