import { StyleSheet,View,Text,Image,useWindowDimensions } from "react-native";
import React from "react";

const ProductItem=({product})=>{
    const {width, height} = useWindowDimensions();
    return(
        <View style={{...styles.container,
            maxWidth: 0.70 * width,
            maxHeight: 0.5 * height,
            margin: width < 330 ? 10: 15}}>
            <Image source={{uri:product.image}} style={styles.image}/>
            <Text>{product.description}</Text>
        </View>
    )
}
export default ProductItem;

const styles=StyleSheet.create( {
    image:{
        width:200,
        height:200,
        borderRadius:10,
      
    },
    container:{
        padding:15,
        margin:15,
   
      
    },

})