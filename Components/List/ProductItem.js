import { StyleSheet,View,Text,Image,useWindowDimensions } from "react-native";
import React from "react";
import { colors } from "../../Styles/colors";
const ProductItem=({product})=>{
    const {width, height} = useWindowDimensions();
    return(
        <View style={{...styles.container,
            maxWidth: 0.70 * width,
            maxHeight: 0.5 * height,
            margin: width < 330 ? 10: 15}}>
            <Image source={{uri:product.image}} style={styles.image}/>
            <Text style={styles.text}>{product.description}</Text>
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
        padding:5,
        margin:5,
   
      
    },
    text:{
        color:colors.white,
        textAlign:'center',
        marginTop:8,
    }

})