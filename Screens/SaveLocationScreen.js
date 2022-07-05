import React, { useEffect } from "react"

import { useDispatch } from "react-redux"
import { addLocation, addLocationDb } from "../Features/Locations"
import * as ImagePicker from 'expo-image-picker'
import { Button, TextInput, View, Text, StyleSheet, Image,TouchableOpacity } from "react-native"
import { colors } from "../Styles/colors"
import { Entypo } from '@expo/vector-icons';


const SaveLocationScreen = ({ navigation, route }) => {
    const [title, setTitle] = React.useState("")
    const [picture, setPicture] = React.useState("")
    const [address, setAddress]=React.useState("")

    const dispatch = useDispatch()


    const params = route.params
    const addressP=params?.address
useEffect(()=>{
 
    setAddress(addressP)  
}
    
,[addressP])

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
        const permissionRes = await ImagePicker.requestCameraPermissionsAsync()
        if (permissionRes.granted=== false) {
            alert("You've refused to allow this app the access to your camera")
            return
        }

       

    }
    const handleTakePicture = async () => {
        const isVerified = getPermission()
        if (!isVerified) {
            return
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
    const handleChangePicture=()=>{
        setPicture("")
    }
    const handleChangeLocation =()=>{

        setAddress("")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>New Direction</Text>
            <TextInput style={styles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Title">
            </TextInput>

            {picture ?
            <View style={styles.containerImage}>
        <Image
        source={{ uri: picture }}
        style={styles.image}

        />
           <TouchableOpacity onPress={handleChangePicture}>
            <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
        </View>
        :
        <>
        <TouchableOpacity style={styles.button} onPress={handleTakePicture} ><Text  style={styles.buttonText}> Take a picture</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handlePickLibrary} ><Text style={styles.buttonText}>Pick from the gallery</Text></TouchableOpacity>
</>
      }
      {address? 
      <View style={styles.containerAddress}>
      <Text  onPress={handleChangeLocation}style={styles.textAddress}>{address}</Text>  
      <TouchableOpacity onPress={handleChangeLocation}>
            <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
      </View>
    :
    <>
          <TouchableOpacity style={styles.button} onPress={handleLocation} ><Text style={styles.buttonText}>Get location</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleSetLocation} ><Text style={styles.buttonText}>Set location</Text></TouchableOpacity>
    </>
    }
 {
    address && picture ?
    <TouchableOpacity style={styles.buttonConfirm} onPress={handleConfirm} ><Text style={styles.buttonConfirmText}> Confirm</Text></TouchableOpacity>
    :
    null
 }
            
            
  


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
        backgroundColor: colors.black,
    },
    text:{
        color:colors.white,
        textTransform:'uppercase',
        textDecorationLine:'underline',
        marginBottom:20,
        fontSize:20
    },
    image: {
        width: '90%',
      height: 200,
        borderWidth: 2,
        borderRadius: 8,
   
        margin:5
    },
    containerAddress:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'

    },
    containerImage:{flex:1,
        flexDirection:'row',
        marginTop:100,
        marginLeft:20
},
    textAddress:{
        color:colors.white,
        margin:10
    },
    button:{
        backgroundColor:colors.darkerWhite,
        borderRadius:5,
        padding:5,
        margin:10
    },
    buttonConfirm:{
        backgroundColor:colors.darkerWhite,
        borderRadius:5,
        padding:5,
        margin:5,
        width:200,
        height:40,
        marginTop:70

    },
    buttonText:{
        fontFamily:'Saira'
    },
    buttonConfirmText:{
        textTransform:'uppercase',
        borderRadius:5,
        textAlign:'center',
   
        fontSize:20,
        fontFamily:'Saira'
    },
    input:{
        backgroundColor:colors.darkerWhite,
        margin:5,
        padding:5,
        borderRadius:5,
        width:150,
        textAlign:'center'
    }

})

