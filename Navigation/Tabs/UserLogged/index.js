import ShopNavigation from "../../Stacks/Shop";
import CartStack from "../../Stacks/Cart";
import OrderStack from "../../Stacks/Orders";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import React, { useEffect } from "react";
import { colors } from "../../../Styles/colors";
import { FontAwesome5 } from '@expo/vector-icons'; 
import{useSelector}from 'react-redux'
import LocationStack from "../../Stacks/Location";
import { Entypo } from '@expo/vector-icons';



const BottomTabs = createBottomTabNavigator()
const TabNavigatorLogged = () => {
const {cart}=useSelector(state=>state.cart.value)
 const quantity=cart.length

    return (
      <BottomTabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}
      >
                <BottomTabs.Screen
        name="ShopTab"
        component={ShopNavigation}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <FontAwesome5 name="store" size={24} color="black" />
                <Text>Shop</Text>
              </View>
            )
          }
        }}
      />


<BottomTabs.Screen 
name="CartTab"
component={CartStack}
options={{
  tabBarBadge:quantity,
    tabBarIcon: ({focused})=>{
        return (
            <View style={styles.item}>
                <Feather name="shopping-bag" size={24} color="black" />
                <Text>Cart</Text>

            </View>
        )
    }
}}
/>
  <BottomTabs.Screen
        name="OrdersTab"
        component={OrderStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Feather name="list" size={24} color="black" />
                <Text>Orders</Text>
              </View>
            )
          }
        }}
      />
             <BottomTabs.Screen
        name="LocationTab"
        component={LocationStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.item}>
                <Entypo name="location" size={24} color="black" />
                <Text>Directions</Text>
              </View>
            )
          }
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabNavigatorLogged

const styles = StyleSheet.create({
  tabBar: {
    

    position: "absolute",
    bottom: 25,
    
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 75,
    alignItems:"center",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',

  },
  item: {
    marginTop:20,
    marginBottom:0,
    paddingBottom:0,
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent:'center',
  }
})