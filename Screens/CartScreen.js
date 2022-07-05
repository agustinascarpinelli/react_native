import { StyleSheet,Text,View,TouchableOpacity, FlatList } from "react-native";
import { colors } from "../Styles/colors";
import CartItem from "../Components/CartItem";
import {useDispatch, useSelector} from 'react-redux'


import React from "react";
import  { confirmPurchase ,removeCart} from "../Features/Cart";







const renderItem=(data)=>(
    <CartItem item={data.item}/>
)

const CartScreen =()=>{
    const dispatch=useDispatch()
    const {cart}= useSelector(state=>state.cart.value)
    const userId=useSelector(state=>state.auth.value.user.userId)
    
 const getTotal=()=>{
           let total=0
    cart.forEach(prod => {
       
        const totalPrice=prod.price*prod.quantity
        total += totalPrice
        
    });
    return total
}

const total=getTotal()

    const handleConfirm=()=>{
        dispatch(removeCart())
        dispatch(confirmPurchase({total:total,userId:{userId},item:cart}))
    }
   
    return(
        <View style={styles.container}>
        <View style={styles.list}>
            <FlatList
    
    data={cart}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />

        </View>
        <View style={styles.footer}>
        <View style={styles.total}>
                    <Text style={styles.text}>Total</Text>
                    <Text style={styles.text}>${total}</Text>
                </View>
            <TouchableOpacity style={styles.confirm} onPress={handleConfirm}>
                <Text style={styles.confirmText}>Confirm</Text>
               
            </TouchableOpacity>
        </View>
    </View>
)
}

export default CartScreen

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.black,
    paddingBottom: 120,
},
list: {
    flex: 1,
},
footer: {
    padding: 12,
    borderTopColor: colors.white,
    borderTopWidth: 1,
},
confirm: {
    backgroundColor: colors.darkerWhite,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
confirmText:{
color:colors.black,
textTransform:'uppercase',
fontFamily:'Saira',
fontSize:18
},
total: {
    flexDirection: 'row',
},
text: {
    fontSize: 18,
    fontFamily: 'Saira',
    padding: 8,
    color:colors.white
    
}
})