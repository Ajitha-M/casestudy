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
import WardenProfileScreen from '../screens/WardenProfileScreen';
import WardenNotification from '../screens/WardenNotification';
import HomeScreen1 from '../screens/HomeScreen1';



const Drawer = createDrawerNavigator();
function DrawerNavigation1({navigation}) {
  return (
    <Drawer.Navigator >
    
    <Drawer.Screen name="HomeScreen1" component={HomeScreen1}/>
    <Drawer.Screen name="Profile" component={WardenProfileScreen} />
   
    <Drawer.Screen name="Notification" component={WardenNotification} />
    <Drawer.Screen name="Logout" component={WelcomeScreen} options={{headerShowns:false}}
     myPress={() => navigation.navigate("WelcomeScreen")}/>
    
</Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default DrawerNavigation1;