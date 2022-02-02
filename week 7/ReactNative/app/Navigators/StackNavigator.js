import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Register from "../screens/Register";
import HomeScreen from "../screens/HomeScreen";
import DrawerNavigation from "../Navigators/DrawerNavigator";
import Profile from "../screens/Profile";
import OutPassScreen from "../screens/OutPassScreen";
import NotificationScreen from "../screens/NotificationScreen"
import WardenProfileScreen from "../screens/WardenProfileScreen";
import WardenLogin from "../screens/WardenLogin";
import WardenRegister from "../screens/WardenRegister";
import DrawerNavigation1 from "./DrawerNavigator1";
import StudentEditProfile from "../screens/StudentEditProfile";
import WardenEditProfileScreen from "../screens/WardenEditProfileScreen";
const Stack = createNativeStackNavigator();
 function StackNavigation() {
  return (
   
      <Stack.Navigator >
        <Stack.Screen name="welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="WardenLogin" component={WardenLogin} options={{headerShown:false}}/>
        <Stack.Screen name="HomeScreen" component={DrawerNavigation}  options={{headerShown:false}} />
        <Stack.Screen name="HomeScreen1" component={DrawerNavigation1} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={Register}options={{headerShown:false}} />
        <Stack.Screen name="WardenRegister" component={WardenRegister} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="OutPassScreen" component={OutPassScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="WardenProfileScreen" component={WardenProfileScreen} />
        <Stack.Screen name="WardenEditProfileScreen" component={WardenEditProfileScreen} />
        <Stack.Screen name="StudentEditProfile" component={StudentEditProfile} />
        <Stack.Screen name="Logout" component={WelcomeScreen} options={{headerShown:false}}/>
        {/* <Stack.Screen name="Profile" component={Wa} /> */}


        
        
      </Stack.Navigator>
    
    
      );
}
export default StackNavigation;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
