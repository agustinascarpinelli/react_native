import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrdersScreen from "../../../Screens/OrdersScreen";
import { colors } from "../../../Styles/colors";
import ProfileScreen from "../../../Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
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
        name="Orders"
        component={ProfileScreen}
        options={{
          title: "ORDERS",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};
export default OrderStack;