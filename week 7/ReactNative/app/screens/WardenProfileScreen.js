import React, { Profiler } from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

import AppButton from "../components/AppButton";

const WardenProfileScreen= ({navigation}) => {
  return (
    
      <View style={styles.continer}>
       
        <View style={styles.continer1}>
          <AppText>Name</AppText>
          <AppTextInput
            // placeholder="Name"
            keyboardType="default"
          />
       
          <AppText>ContactNO</AppText>
          <AppTextInput 
          // placeholder="contact" 
          keyboardType="default" />
        {/* </View>

<View style={styles.continer1}> */}
<AppText>Place</AppText>
  <AppTextInput
    // placeholder="place"
    keyboardType="default"
  />
  
          <AppText>Email</AppText>
          <AppTextInput
            // placeholder="email"
            keyboardType="email-address"
          />
          
          {/* <View> */}
            <AppButton title="Edit"
            myPress={() => navigation.navigate("WardenEditProfileScreen")}
            // onPress={()=>console.log("working")}
            />
            <AppButton title="Back"
            myPress={() => navigation.navigate("HomeScreen1")}/>
            
          {/* </View> */}

          
        </View> 
      </View>
    
  );
};

export default WardenProfileScreen;


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
  
})