import { StyleSheet,View ,Text,Image} from "react-native";
import { colors } from "../Styles/colors";
import React from "react";
import * as Animatable from 'react-native-animatable'

const Header=({title})=>{
    return(
        <Animatable.View animation='fadeInLeft' duration={5000}style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </Animatable.View>
    )
}
export default Header;

const styles=StyleSheet.create({
    container:{
        height:80,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.black
    },
    text:{ 
        fontSize:17,
        fontFamily:'Saira',
        color:colors.white,
        textTransform:'uppercase'
        
       
    },
 
})