import React, { useState } from "react"

import { useDispatch } from "react-redux"
import { addLocation, addLocationDb } from "../Features/Locations"
import * as ImagePicker from 'expo-image-picker'
import { Button, TextInput, View, Text, StyleSheet, Image } from "react-native"
import { colors } from "../Styles/colors"



const SaveLocationScreen = ({ navigation, route }) => {
    const [title, setTitle] = useState("")
    const [picture, setPicture] = useState("")
    const dispatch = useDispatch()


    const params = route.params


    const handleLocation = () => {
        navigation.navigate('Get-Location')
    }

    const handleSetLocation = () => {
        navigation.navigate('Set-Location')
    }

    const handlePickLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        })
        if (!result.cancelled) {
            setPicture(result.uri)
        }
    }

    const getPermission = async () => {
        const { status } = await ImagePicker.getCameraPermissionsAsync()
        if (status !== 'granted') {
            return false
        }

        return true

    }
    const handleTakePicture = async () => {
        const isVerified = getPermission()
        if (!isVerified) {
            console.log("Permission denied")
        }

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1,
        })

        console.log(image);
        setPicture(image.uri);
    }

    const handleConfirm = async () => {
        let id = Date.now()
        dispatch(addLocation({ title, picture, address: params?.address, id }))
        dispatch(addLocationDb({ title, picture, id, address: params?.address }))
        setTitle("")
        setPicture("")
    }
    return (
        <View style={styles.container}>
            <Text>New Direction</Text>
            <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="Title">
            </TextInput>

            {picture ?
                <Image
                    source={{ uri: picture }}
                    style={styles.image}
                />
                : null
            }

            <Button title='Confirm' onPress={handleConfirm} />

            <Button title='Take a picture' onPress={handleTakePicture} />
            <Button title='Pick from the gallery' onPress={handlePickLibrary} />
            <Button title='Get location' onPress={handleLocation} />
            <Button title='Set location' onPress={handleSetLocation} />
            


        </View >
    )
}

export default SaveLocationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.lightBlue,
    },
    img: {
        width: '90%',
        height: 200,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.lightBlue
    }

})

