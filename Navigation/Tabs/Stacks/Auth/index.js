import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../../../Styles/colors";
import LoginScreen from "../../../Screens/AuthScreen";


const Stack=createNativeStackNavigator()
const AuthStack = () => {
return (
    <Stack.Navigator initialRouteName=""
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.darkblue
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontFamily: 'Saira',
            fontSize: 28,
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name= "auth"
          component={LoginScreen}
          options={{
            title: "Auth"
          }}
        >
        
        </Stack.Screen> 
    
    </Stack.Navigator>
  )
}

export default AuthStack;

const styles = StyleSheet.create({})