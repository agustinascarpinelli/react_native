import { StyleSheet,View } from "react-native";
import React from "react";
import { colors } from "../Styles/colors";


const Searcher=({children})=>{
    return(
        <View style={styles.searcherContainer}>{children}</View>
    )
}

export default Searcher;

const styles=StyleSheet.create({
    searcherContainer:{
        flexDirection:'row',
        width:'90%',
        alignItems:'center',
       marginBottom:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:6,
        },
        shadowOpacity:0.37,
        shadowRadius:7.49,
        elevation:12,
        borderRadius:12,
        backgroundColor:colors.white,
        fontFamily:'Saira'
    }
})