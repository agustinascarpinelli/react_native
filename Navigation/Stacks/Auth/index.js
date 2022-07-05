import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../Styles/colors";
import LoginScreen from "../../../Screens/AuthScreen";
import { StyleSheet } from "react-native";


const Stack=createNativeStackNavigator()
const AuthStack = () => {
return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.black
          },
         
        }}
      >
        <Stack.Screen
          name= "auth"
          component={LoginScreen}
          options={{
            title: ""
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default AuthStack;

const styles = StyleSheet.create({})