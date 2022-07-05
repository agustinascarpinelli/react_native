import React from "react";
import PlaceItem from "../Components/PlaceItem";
import { useSelector } from "react-redux";
import { FlatList, View ,StyleSheet} from "react-native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocations, removeLocationDb } from '../Features/Locations'
import { colors } from "../Styles/colors";

const renderItem=({item})=>{
    return(
        <PlaceItem
        onSelect={()=>{}}
        title={item.title}
        image={item.picture }
        address={item.address}
        id={item.id}
        >
        </PlaceItem>
    )
}

const LocationsScreen =()=>{
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getLocations())
    }, [])
  
    const { locations } = useSelector(state => state.locations.value)
 
    return(
        <View style={styles.container}>
    
            <FlatList
            data={locations}
            renderItem={renderItem}
            keyExtractor={location=>location.id}></FlatList>

        </View>)
         
}
export default LocationsScreen
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.black,
        height:'100%'
    }
})