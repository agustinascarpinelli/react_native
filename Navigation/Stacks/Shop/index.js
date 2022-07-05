import CategoriesScreen from "../../../Screens/CategoriesScreen";
import ProductDetailScreen from "../../../Screens/ProductDetailScreen";
import ProductScreen from "../../../Screens/ProductScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../../Styles/colors";


const Stack =createNativeStackNavigator();
function ShopNavigation(){
    return(
       
        <Stack.Navigator initialRouteName="Categories"  screenOptions={{
            headerStyle: {
              backgroundColor: colors.black
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontFamily:'Saira',
              fontSize: 15,
       
            },
            headerTitleAlign: "center",
          }} >
                <Stack.Screen styles={styles.title}name="Categories" component ={CategoriesScreen}options={
            {
              title: "Categories"
            }
          }/>
                <Stack.Screen 
                name ="Products"
                component={ProductScreen}
                options={({route})=>({
                    title:route.params.categoryTitle
                })}
                />
                <Stack.Screen 
                name="Detail" 
                component={ProductDetailScreen}
                options={({route})=>({
                    title:route.params.productTitle,
                })}
                />
            </Stack.Navigator>
        
    )
}
export default ShopNavigation;
const styles=StyleSheet.create({
    title:{
        fontFamily:'Saira',
        textTransform:'uppercase'
    }
})