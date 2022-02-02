import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import StudentScreen from '../screens/StudentScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import WardenScreen from '../screens/WardenScreen'
import Profile from '../screens/Profile';
import OutPassScreen from '../screens/OutPassScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Drawer = createDrawerNavigator();
function DrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator>
    
    <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Outpass" component={OutPassScreen} />
    <Drawer.Screen name="Notification" component={NotificationScreen} />
    <Drawer.Screen name="Logout" component={WelcomeScreen} option={{headerShown:false}}
     myPress={() => navigation.navigate("WelcomeScreen")}/>
    
</Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DrawerNavigation;