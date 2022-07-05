import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartScreen from "../../../Screens/CartScreen";
import { colors } from "../../../Styles/colors";

const Stack = createNativeStackNavigator();
const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{
      headerStyle: {
        backgroundColor: colors.black
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily:'Saira',
        fontSize: 15,
 
      },
      headerTitleAlign: "center",
    }}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: "CART",
      
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default CartStack;
