import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating, key } = route.params;
    let imgPath = `../assets/rating-${rating}.png`
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
                {/* <Text style={globalStyles.titleText}>{rating}</Text> */}
                <View style={styles.rating}>
                    <Text style={globalStyles.titleText}>GameZone Rating: </Text>
                    <View style={styles.ratingHearts}>
                        {Array(rating).fill().map(() =>
                            <Image key={Math.random()} style={styles.image} source={require('../assets/rating-1.png')} />
                        )}
                    </View>
                    {/* <Image source={require(imgPath)} /> */}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    },
    ratingHearts: {
        flexDirection: 'row'
    }
})
