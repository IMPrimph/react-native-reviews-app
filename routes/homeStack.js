import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import ReviewDetails from "../screens/reviewDetails";


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator
        initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: "#eee",
                height: 60,
            },
            headerTintColor: "#444",
        }}
    >
        {/* //other options: "float", "screen" */}
        <Screen name="Home" component={Home} options={{ title: 'GameZone' }} />
        <Screen name="Details" component={ReviewDetails} options={{ title: 'ReviewDetails' }} />
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