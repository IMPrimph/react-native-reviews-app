import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('Details')
        // navigation.push('Details')
        // props.navigation.navigate('Details');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <Button title='go to reviews' onPress={pressHandler} />
        </View>
    )
}
