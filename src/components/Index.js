import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home'
import SelectPlayer from './SelectPlayer'
import RandCard from './RandCard'
import Game from './Game'

const Stack = createStackNavigator();

export default function Index() {
    return (
        <NavigationContainer>
            <StatusBar
                hidden={false}
            />
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        //  title: 'HOME' 
                        headerShown: false,            
                    }} />

                <Stack.Screen
                    name="SelectPlayer"
                    component={SelectPlayer}
                    options={{
                        headerShown: false,
                        // title: 'HOME'             
                    }} />
                <Stack.Screen
                    name="RandCard"
                    component={RandCard}
                    options={{
                        headerShown: false,
                        //  title: 'JOGUINHO'             
                    }} />
                     <Stack.Screen
                    name="Game"
                    component={Game}
                    options={{
                        headerShown: false,
                                    
                    }} />            
            </Stack.Navigator>
        </NavigationContainer>
    );
}
