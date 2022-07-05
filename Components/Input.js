import React from "react";
import {colors} from '../Styles/colors'
import { StyleSheet,View,Text,TextInput  } from "react-native";

const Input =({label,password=false, onChange, value, error=null})=>{
    return (
        <View style ={styles.container}>
            <Text style={styles.text}>{label}</Text>
            <TextInput
        style={styles.input}
        onChangeText={onChange}
        secureTextEntry={password}
        value={value}
      />
            {error? <Text style={styles.error}>* {error}</Text>:null}
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    input: {
        color: colors.black,
        backgroundColor:colors.white,
         padding: 6,
        width: '100%',
        fontFamily: 'Saira',
        fontSize: 18,
    },
    text: {
        fontFamily: 'Saira',
        fontSize: 18,
        marginBottom: 6,
        color: colors.dark,
    },
    error: {
      fontFamily: 'Saira',
      fontSize: 12,
      marginBottom: 4,
      color: 'red',
      marginTop:10}
})