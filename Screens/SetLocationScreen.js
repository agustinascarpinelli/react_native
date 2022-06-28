import { Button,Text,View } from "react-native";
import React,{useEffect,useState} from 'react'
import MapView, {Marker} from 'react-native-maps'
import * as Location from 'expo-location'
import { API_KEY } from "../Constants/Google";

const SetLocationScreen=({navigation})=>{
const [location, setLocation]=useState(null)
const [errorMsg, setErrorMsg]=useState(null)
const initialRegion={
    latitude:37,
    longitude:-122,
    latitudeDelta:0.09,
    longitudeDelta:0.04
}

useEffect(()=>{
    (async ()=>{
        let {status}=await Location.requestForegroundPermissionsAsync()
        if (status !=='granted'){
            setErrorMsg("Permission to access location was denied")
            return
        }
    })()
},[])

const handleLocation=event=>{
    setLocation({
        lat:event.nativeEvent.coordinate.latitude,
        lng:event.nativeEvent.coordinate.longitude
    })
}

const handleConfirm=()=>{
    (async()=>{
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${API_KEY}`)
        const reverseGeocode = await response.json()
        const address=reverseGeocode.results[0].formatted_address;
        navigation.navigate('Save-Location', {address})
    })()
}
return (
    // <View>
    <>
        {errorMsg ?
            <Text>{errorMsg}</Text>
            :
            <>
                <MapView onPress={handleLocation} initialRegion={initialRegion} style={{flex: 1}}> 
                    {location?.lat ?
                    <Marker 
                        title="Selected location"
                        coordinate={{
                            latitude: location.lat,
                            longitude: location.lng,
                        }}
                    
                    />
                    :
                    null
                    
                
                    }

                </MapView>
                <Button title="Confirm location" onPress={handleConfirm}></Button>
            </>
        }
        {/* </View> */}
    </>
)
}





export default SetLocationScreen