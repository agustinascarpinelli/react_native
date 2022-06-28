import React from "react";
import PlaceItem from "../Components/PlaceItem";
import { useSelector } from "react-redux";
import { FlatList, View } from "react-native";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLocations, removeLocationDb } from '../Features/Locations'

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
        <View>
            <FlatList
            data={locations}
            renderItem={renderItem}
            keyExtractor={location=>location.id}></FlatList>

        </View>
    )
}
export default LocationsScreen