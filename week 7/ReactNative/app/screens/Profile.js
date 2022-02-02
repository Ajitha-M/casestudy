import React, { Profiler } from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import AppError from "../components/AppError";

import AppButton from "../components/AppButton";

const Profile = ({navigation}) => {
  return (
    
      <View style={styles.continer}>
       
        <View style={styles.continer1}>
          <AppText>Name</AppText>
          <AppTextInput
             placeholder="Name"
           
            // keyboardType="default"
          />
          
        {/* </View>
        <View style={styles.continer1}> */}
          <AppText>Department</AppText>
          <AppTextInput
            // placeholder="Name"
            keyboardType="default"
          />
        {/* </View>

        <View style={styles.continer1}> */}
          <AppText>regnNo</AppText>
          <AppTextInput
            // placeholder="Number"
            keyboardType="default"
          />
        {/* </View>

        <View style={styles.continer1}> */}
          <AppText>RoomNO</AppText>
          <AppTextInput
            // placeholder="room number"
            keyboardType="default"
          />
        {/* </View>

        <View style={styles.continer1}> */}
          <AppText>ContactNO</AppText>
          <AppTextInput 
          // placeholder="contact" 
          keyboardType="default" />
       
          <AppText>Email</AppText>
          <AppTextInput
            // placeholder="email"
            keyboardType="email-address"
          />    
            <AppButton title="edit"
            myPress={() => navigation.navigate("StudentEditProfile")}
            />
            <AppButton title="Back"
             myPress={() => navigation.navigate("HomeScreen")}/>




        </View> 
      </View>
    
  );
};

export default Profile;
const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor:'skyblue',
    padding: 10,
    paddingBottom:50,
    paddingTop:30
    
  },
  continer1: {
    marginVertical: "11%",
    backgroundColor:"skyblue"
  },
  text:{
    alignItems:"center",
    justifyContent:"center",
    fontSize:40,
    paddingBottom:50


  }
  
});








