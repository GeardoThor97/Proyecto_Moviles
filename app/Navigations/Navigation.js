import React from "react";
import {NavigationContainer} from "@react-navigation/native";
//import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Text } from 'react-native-elements';
//import CuentaStack from "./CuentaStack";
import Login from "../screens/Login"
//import Register from "../screens/Register"

//import Cuenta from "../screens/Cuenta";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
//omar ya weeey

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function navigation(){
return(
    <NavigationContainer>
        
      <Text h1></Text>
        <Tab.Navigator>
           
            <Tab.Screen 
            name ="Login" 
            component={Login}
            options ={{ title: " Mi Login"}}
            />
            
            <Tab.Screen 
            name ="Home" 
            component={Home} 
            options={{title: 'Home'}}/>
           <Tab.Screen 
            name ="Config" 
            component={Settings} 
            options={{title: 'Mi Configuracion'}}/>
        </Tab.Navigator>
        
    
        

    </NavigationContainer>
);

}



