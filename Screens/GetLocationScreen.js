import * as Location from 'expo-location';
import { API_KEY } from '../Constants/Google'
import { useEffect, useState } from 'react';
import { View, Text,Image,StyleSheet,Button } from 'react-native';

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
              const address = reverseGeoCode.result[0].formatted_address
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
                style={{ width: 500, height: 500 }}
              />
              : null
            }
            {
              address ?
              <>
                <Text>{address}</Text>
                <Button title="Confirmar dirección" onPress={handleConfirmLocation}></Button>
              </>
              :
              null
            }
          </View>
        </View>
      );
    }
    




export default GetLocationScreen
const styles=StyleSheet.create({})