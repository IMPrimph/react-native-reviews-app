import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import About from '../screens/about'
import Header from '../shared/header'


const aboutStack = createStackNavigator();

export const AboutStack = () => {
    return (
        <aboutStack.Navigator
            initialRouteName='About'
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
                options={() => ({
                    headerTitle: () => <Header title='About' />,
                })}
            />
        </aboutStack.Navigator>
    );
}