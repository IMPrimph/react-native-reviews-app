import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'

const aboutStack = createStackNavigator();

export const AboutStack = () => {
    return (
        <aboutStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
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
            />
        </aboutStack.Navigator>
    );
}