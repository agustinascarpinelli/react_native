import { StyleSheet,View } from "react-native";
import React from "react";


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
        marginVertical:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:6,
        },
        shadowOpacity:0.37,
        shadowRadius:7.49,
        elevation:12,
        borderRadius:12,
    }
})