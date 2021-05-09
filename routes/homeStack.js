import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import ReviewDetails from "../screens/reviewDetails";


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator>
        {/* //other options: "float", "screen" */}
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={ReviewDetails} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
        <HomeNavigator />
    </NavigationContainer>
);


// const Stack = createStackNavigator();

// export const AppNavigator = () => (
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Details" component={ReviewDetails} />
//         </Stack.Navigator>
//     </NavigationContainer>
// );