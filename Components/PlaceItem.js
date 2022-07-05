import React from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../Styles/colors";
import { removeLocationDb, removeLocation } from "../Features/Locations";
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from "react-redux";

const PlaceItem = ({ onSelect, title, image, address,id }) => {
const dispatch=useDispatch()
    const onRemove = (id) => {
        console.log(id);
        dispatch(removeLocationDb({ id }))
        dispatch(removeLocation({ id }))
    }
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={styles.placeItem}>
            <Image
                style={styles.image}
                source={{ uri: image }} />
            <View style={styles.view}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <TouchableOpacity onPress={() => onRemove(id)}>
                <Entypo  style={styles.trash}name="trash" size={24} color="white" />
            </TouchableOpacity>



        </TouchableOpacity>
    )
}
export default PlaceItem

const styles = StyleSheet.create({
    placeItem: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom:20,
        marginLeft:10,
        marginRight:10,

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    

    },
    view: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: colors.white,
        textTransform:'uppercase',
        textDecorationLine:'underline',
        fontSize: 18,
        marginBottom: 6,
    },
    address: {
        color: colors.white,
        fontSize: 16,
        marginLeft:2
    },
    trash:{
        marginRight:10,
    }
})