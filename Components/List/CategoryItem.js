
import { StyleSheet,View,Text,Dimensions,useWindowDimensions } from "react-native";
import { colors } from "../../Styles/colors";
import React, { useState,useEffect } from "react";
const CategoryItem=({category})=>{
    const {width, height} = useWindowDimensions();


    return(
        <View style={{...styles.container,
            maxWidth: 0.43 * width,
            maxHeight: 0.43 * height,
            margin: width < 330 ? 10: 15}}>
            <Text style={styles.text}>{category.category}</Text>
        </View>
    )
}

export default CategoryItem;
const styles=StyleSheet.create({
    container:{
        width:150,
        height:150,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        padding:15,
        backgroundColor:colors.lighterBlue,
        margin:0.05 * Dimensions.get('window').width,
        borderRadius:10,
    },

    text:{
        fontSize:18,
    }
})