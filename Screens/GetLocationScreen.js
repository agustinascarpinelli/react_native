import * as Location from 'expo-location';
import { API_KEY } from '../Constants/Google'
import { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { colors } from '../Styles/colors';


const GetLocationScreen = ({navigation}) => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const [address, setAddress] = useState(null)
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
            }
            let location = await Location.getCurrentPositionAsync({})

            setLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })





        })()
    }, [])

    useEffect(() => {
        if (location?.lat) {
            (async () => {
                setPhoto(`https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x600&maptype=roadmap&markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=${API_KEY}`)
               const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`)
                const reverseGeoCode = await response.json()
              const address = reverseGeoCode.results[0].formatted_address
                setAddress(address)
            })()
        }
    }, [location])

    let text = 'Waiting...'
    if (errorMsg) {
        text = errorMsg
    }
    else if (location) {
        text = JSON.stringify(location)
    }

    const handleConfirmLocation =()=>{
        navigation.navigate('Save-Location', {address})
    }

    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>{text}</Text>
          <View>
            {photo ?
              <Image
                source={{ uri: photo }}
                style={{ width: 500, height: 500, marginTop:50, marginBottom:30 }}
              />
              : null
            }
            {
              address ?
              <>
                <Text>{address}</Text>
                <TouchableOpacity style={styles.button} onPress={handleConfirmLocation}><Text style={styles.buttonText}>Confirm direction</Text></TouchableOpacity>
              </>
              :
              null
            }
          </View>
        </View>
      );
    }
    




export default GetLocationScreen
const styles=StyleSheet.create({
  container:{
backgroundColor:colors.black,
height:'100%'
  },
  paragraph:{
    marginTop:20,
color:colors.white,
textAlign:'center',
fontFamily:'Saira'
  },
  button:{
    backgroundColor:colors.darkerWhite,
    width:200,
    marginLeft:110,
    marginRight:110,
    borderRadius:5
  },
  buttonText:{
    color:colors.black,
    textAlign:'center',
    fontFamily:'Saira',
    fontSize:18,
    textTransform:'uppercase'
  }
})