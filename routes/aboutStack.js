import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'
import Header from '../shared/header'
import { Image } from 'react-native';


const aboutStack = createStackNavigator();

export const AboutStack = () => {
    return (
        <aboutStack.Navigator
            initialRouteName='About'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#bbb',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <aboutStack.Screen
                name="About"
                component={About}
                options={() => ({
                    headerTitle: () => <Header title='About GameZone' />,
                    headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: '100%' }} />
                })}
            />
        </aboutStack.Navigator>
    );
}