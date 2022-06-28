import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../Styles/colors";
import { Ionicons } from '@expo/vector-icons'
import SaveLocationScreen from "../../../Screens/SaveLocationScreen";
import LocationsScreen from "../../../Screens/LocationsScreen";
import GetLocationScreen from "../../../Screens/GetLocationScreen";
import SetLocationScreen from "../../../Screens/SetLocationScreen";



const Stack = createNativeStackNavigator()

const LocationStack = () => {
    return (
        <Stack.Navigator initialRouteName=""
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.violet
                },
                headerTintColor: colors.lightBlue,
                headerTitleStyle: {
                    fontFamily: 'OpenSans',
                    fontSize: 28,

                },
                headerTitleAlign: "center",
            }}>
            <Stack.Screen
                name='Locations'
                component={LocationsScreen}
                options={({ navigation }) => ({
                    title: "Directions",
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("Save-Location")}>
                                <Ionicons name="add-circle-outline" size={24} color='black' />
                            </TouchableOpacity>
                        )
                    }
                })}/>
            <Stack.Screen
                name='Save-Location'
                component={SaveLocationScreen}
                options={
                    {
                        title: 'Save location'
                    }
                }/>
            <Stack.Screen
                name='Get-Location'
                component={GetLocationScreen}
                options={
                    {
                        title: 'Get location'
                    }}
            />

            
<Stack.Screen
                name='Set-Location'
                component={SetLocationScreen}
                options={
                    {
                        title: 'Set location'
                    }}
            />





        </Stack.Navigator>
    )
}

export default LocationStack