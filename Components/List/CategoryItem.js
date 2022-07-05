
import { StyleSheet,View,Text,Dimensions,useWindowDimensions,Image} from "react-native";
import { colors } from "../../Styles/colors";
import React, { useState,useEffect } from "react";
import * as Animatable from 'react-native-animatable'
const CategoryItem=({category})=>{
    const {width, height} = useWindowDimensions();


    return(
        <Animatable.View animation='zoomIn' duration={5000} style={{...styles.container,
            maxWidth: 0.50 * width,
            maxHeight: 0.50 * height,
            margin: width < 330 ? 10: 15}}>
            <Image source={{uri:category.image}} style={styles.image}/>
        </Animatable.View>
    )
}

export default CategoryItem;
const styles=StyleSheet.create({
    
    container:{
        padding:10,
        

    },

    image:{
        width:160,
        height:180,
        borderRadius:10,

      
    }
})