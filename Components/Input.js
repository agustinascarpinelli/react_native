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
            {error? <Text style={styles.container}>{error}</Text>:null}
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
        color: colors.beige,
        backgroundColor:colors.darkblue,
         padding: 6,
        width: '100%',
        fontFamily: 'OpenSans',
        fontSize: 18,
    },
    text: {
        fontFamily: 'OpenSans',
        fontSize: 18,
        marginBottom: 6,
        color: 'white',
    },
    error: {
      fontFamily: 'OpenSans',
      fontSize: 12,
      marginBottom: 4,
      color: 'red',
    }
})