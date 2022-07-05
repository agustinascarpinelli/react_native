import { StyleSheet, Text,View,TouchableOpacity,Touchable } from "react-native";
 import React from "react";
 import { Entypo } from '@expo/vector-icons'; 
 import { colors } from "../Styles/colors";
 import { useDispatch ,useSelector} from "react-redux";
 import { removeItem } from "../Features/Cart";

const CartItem =({item})=>{
    
    const dispatch=useDispatch()
    const onDelete =(id)=>{
        dispatch(removeItem({id:id}))
       }
       
    return(
    
        <View style={styles.item}>
            <View>
                <Text style={styles.header}>{item.description}</Text>
            </View>
            <View style={styles.details}>
            <View>
            <Text style={styles.text}>Price: ${item.price}</Text>
                <Text style={styles.text}>Quantity: {item.quantity}</Text>
                <Text style={styles.text}>Total Price: ${item.price*item.quantity}</Text>
                
            </View>
            <TouchableOpacity onPress={()=>onDelete(item.id)}>
            <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
        </View>

    </View>
    )
}
export default CartItem;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: colors.white
    },
    header: {
        fontSize: 18,
        fontFamily: 'Saira',
        color:colors.white,
        fontWeight:'bold',
        textDecorationLine:'underline',
        textAlign:'center'
        
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Saira',
        color:colors.white
}
})