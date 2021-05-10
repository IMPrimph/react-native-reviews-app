import React from 'react'
import { Text, TextInput, View, Button, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values)
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />

                        <TextInput
                            multiline
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />

                        <TextInput
                            keyboardType='number-pad'
                            style={globalStyles.input}
                            placeholder='Review  (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button title='Submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}