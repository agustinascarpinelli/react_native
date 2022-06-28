import { StyleSheet, Text,View,useWindowDimensions, Image, Button, KeyboardAvoidingView, Keyboard,Platform, TouchableWithoutFeedback } from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../Components/Header";
import {useDispatch, useSelector } from "react-redux";
import { addItem } from "../Features/Cart";

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
            <Button onPress={()=>handleAdd(productSelected.id)} title="Add to cart"/>
            <Button onPress={handleBack} title='Go back'/>

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
    },
    image:{
        height:300,
        marginTop:30,
    },
    container:{
        flex:1,
        flexDirection:"column",
    },
 
   prodDescription:{
       fontFamily:'OpenSans',
   }
   
})