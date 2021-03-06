import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/home'
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header'
import { Image } from 'react-native';

const homeStack = createStackNavigator();

export default HomeStack = ({ navigation }) => {
    return (
        <homeStack.Navigator
            initialRouteName='Home'
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
            <homeStack.Screen
                name="Home"
                component={Home}
                options={() => ({
                    headerTitle: () => <Header title='GameZone' />,
                    headerBackground: () => <Image source={require('../assets/game_bg.png')} style={{ height: '100%' }} />
                })}
            />
            <homeStack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Details' }} />
        </homeStack.Navigator>
    );
}


// const { Navigator, Screen } = createStackNavigator();

// const HomeNavigator = () => (
//     <Navigator
//         initialRouteName='Home'
//         screenOptions={{
//             headerStyle: {
//                 backgroundColor: "#eee",
//                 height: 60,
//             },
//             headerTintColor: "#444",
//         }}
//     >
//         {/* //other options: "float", "screen" */}
//         <Screen name="Home" component={Home} options={{ title: 'GameZone' }} />
//         <Screen name="Details" component={ReviewDetails} options={{ title: 'ReviewDetails' }} />
//     </Navigator>
// );

// export const AppNavigator = () => (
//     <NavigationContainer>
//         <HomeNavigator />
//     </NavigationContainer>
// );


// const Stack = createStackNavigator();

// export const AppNavigator = () => (
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={Home} />
//             <Stack.Screen name="Details" component={ReviewDetails} />
//         </Stack.Navigator>
//     </NavigationContainer>
// );