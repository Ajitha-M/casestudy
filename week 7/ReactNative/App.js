import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Button,
} from "react-native";


import WelcomeScreen from "./app/screens/WelcomeScreen";
import Register from "./app/screens/Register";
import Login from "./app/screens/Login";

import Profile from "./app/screens/Profile";
import HomeScreen from "./app/screens/HomeScreen";
import StudentScreen from "./app/screens/StudentScreen";
import OutPassScreen from "./app/screens/OutPassScreen";
import NotificationScreen from "./app/screens/NotificationScreen";
import WardenProfileScreen from "./app/screens/WardenProfileScreen";
import StackNavigator from "./app/Navigators/StackNavigator";
import { NavigationContainer } from '@react-navigation/native';
import StudentEditProfile from "./app/screens/StudentEditProfile";
import WardenLogin from "./app/screens/WardenLogin";
import WardenRegister from "./app/screens/WardenRegister";
import WardenEditProfileScreen from "./app/screens/WardenEditProfileScreen";
import WardenNotification from "./app/screens/WardenNotification";
import StudentDetailsScreen from "./app/screens/StudentDetailsScreen";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>

    //  <SafeAreaView style={styles.container}>
    //   {/* <WelcomeScreen></WelcomeScreen> */}
    //   {/* <Login></Login> */}
    //   {/* <Register></Register> */}
    //   {/* <Profile></Profile> */}
    //   {/* <StudentEditProfile></StudentEditProfile> */}
    //   {/* <OutPassScreen></OutPassScreen> */}
    //   {/* <WardenLogin></WardenLogin> */}
    //   {/* <WardenRegister></WardenRegister> */}
    //   {/* <WardenProfileScreen></WardenProfileScreen> */}
    //   {/* <WardenEditProfileScreen></WardenEditProfileScreen> */}
    //   {/* <WardenNotification></WardenNotification> */}
    //   {/* <StudentScreen></StudentScreen> */}
    //   {/* <NotificationScreen></NotificationScreen> */}
    //   {/* <StudentDetailsScreen></StudentDetailsScreen> */}
    //   {/* <HomeScreen></HomeScreen> */}
      
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: Platform.OS === "android" ? 0 : 50,
  },
});




