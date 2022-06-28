import ShopNavigation from "../../Stacks/Shop";
import CartStack from "../../Stacks/Cart";
import OrderStack from "../../Stacks/Orders";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View,Text,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import React from "react";
import { colors } from "../../../Styles/colors";
import { FontAwesome5 } from '@expo/vector-icons'; 
import LocationStack from "../../Stacks/Location";
import { Entypo } from '@expo/vector-icons';



const BottomTabs = createBottomTabNavigator()
const TabNavigatorLogged = () => {
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
    tabBarIcon: ({focused})=>{
        return (
            <View style={styles.item}>
                <Feather name="shopping-bag" size={24} color="black" />

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
                <Text>Ordenes</Text>
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
    shadowColor: colors.lightBlue,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
