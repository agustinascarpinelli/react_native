import CategoriesScreen from "../../../Screens/CategoriesScreen";
import ProductDetailScreen from "../../../Screens/ProductDetailScreen";
import ProductScreen from "../../../Screens/ProductScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from "react";


const Stack =createNativeStackNavigator();
function ShopNavigation(){
    return(
       
        <Stack.Navigator initialRouteName="Categories" >
                <Stack.Screen name="Categories" component ={CategoriesScreen}options={
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