import { FlatList,StyleSheet, Text,View } from "react-native";
import OrderItem from "../Components/OrderItem";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../Features/Orders";

import { colors } from "../Styles/colors";

const renderItem =({item})=> <OrderItem item={item}/>


const OrdersScreen =()=>{

   
  
    

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getOrders())
    },[])
    
    
    const userId = useSelector (state => state.auth.value.user.userId);
    const orders = useSelector (state => state.orders.value.orders)
    const orderSelected = orders.filter(order => userId === order.userId)
    console.log(orderSelected)
    
    console.log(orders);

    
    return(
        <View style={styles.container}>
            <FlatList 
            data={orders}
            keyExtractor={orders=>orders.id}
            renderItem={renderItem}/>
        </View>
    )
}
export default OrdersScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.black
    }
})