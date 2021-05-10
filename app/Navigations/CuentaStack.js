import React from "react-native";
import {View} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import { Text } from 'react-native-elements';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CuentaStack from "../screens/Cuenta";

const Tab = createBottomTabNavigator();

export default function cuentaStack(){
  return(
      <NavigationContainer>
         
          <Tab.Navigator>
            
              <Tab.Screen
              name ="CuentaStack" 
              component={CuentaStack}
              options ={{ title: " Mi Cuenta"}}
              />
              <Tab.Screen 
              name ="Home" 
              component={Home} 
              options={{title: 'Home'}}/>
          
          </Tab.Navigator>
      </NavigationContainer>
  );
}


  


