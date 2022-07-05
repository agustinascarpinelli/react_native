import { StyleSheet, Text,View,useWindowDimensions, Image, Button, KeyboardAvoidingView, Keyboard,Platform, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import {useDispatch, useSelector } from "react-redux";
import { addItem } from "../Features/Cart";
import { colors } from "../Styles/colors";

const ProductDetailScreen=({
    route,
    navigation

})=>{

    const {productTitle} =route.params;
    const {productSelected}=useSelector(state=>state.products.value)
    const dispatch=useDispatch()
    
    const handleAdd=(id)=>{
        dispatch(addItem({id:id}))
    }
   
    const handleBack=()=>{
        navigation.goBack()
    }

    return(
        productSelected && (
        <KeyboardAvoidingView 
        behavior={Platform.OS==='ios' ? "padding" : "height"}
        style={styles.keyboardAvoid}
        keyboardVerticalOffset={10}>
          
        <Header title ={productTitle}/>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            <Image
            source={{uri:productSelected.image}}
            style={styles.image}
            resizeMode="cover"
            />
            <Text style={styles.prodDescription}>{productSelected.description}</Text>
            <Text>{productSelected.price}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>handleAdd(productSelected.id)} ><Text style={styles.buttonText}>Add to cart</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleBack} ><Text style={styles.buttonText}>go back</Text></TouchableOpacity>

        </View>
        </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView>
        )
    )
}

export default ProductDetailScreen

const styles=StyleSheet.create({
    keyboardAvoid: {
        flex: 1,
        backgroundColor:colors.black,
    
    },
    image:{
        width:300,
        height:300,
        marginTop:30,
        borderRadius:5,
    },
    container:{
        flex:1,
        flexDirection:"column",
            alignItems:'center'
    },
 
   prodDescription:{
       fontFamily:'Saira',
   },
   button:{
    backgroundColor:colors.darkerWhite,
    width:100,
    borderRadius:5,
    marginBottom:15
   },
   buttonText:{
    fontFamily:'Saira',
    textAlign:'center',
    textTransform:'uppercase'
    
   },})