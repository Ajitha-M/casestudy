import React, { Profiler } from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";

import AppButton from "../components/AppButton";

const OutPassScreen = ({navigation}) => {
  return (
    
      <View style={styles.continer}>
       
        <View style={styles.continer1}>
          <AppText style={{fontSize:16}}>Name</AppText>
          <AppTextInput
             placeholder=""
            keyboardType="default"
          />
        {/* </View>
        <View style={styles.continer1}> */}
          <AppText style={{fontSize:16}}>Course</AppText>
          <AppTextInput
             placeholder=""
            keyboardType="default"
          />
       
          <AppText style={{fontSize:16}}>Reason</AppText>
          <AppTextInput
             placeholder=""
            keyboardType="default"
          />
       
          <AppText style={{fontSize:16}}>RelationShip</AppText>
          <AppTextInput
            placeholder=""
            keyboardType="default"
          />
       
          <AppText style={{fontSize:16}}>Address of the person</AppText>
          <AppTextInput 
       placeholder=""
          keyboardType="default" />
       
          <AppText style={{fontSize:16}}>Date</AppText>
          <AppTextInput
            placeholder=""
            keyboardType="default"
          />
          {/* <AppText style={{fontSize:16}}>Time of return</AppText>
          <AppTextInput
           placeholder=""
            keyboardType="default"
          /> */}
          
            <AppButton title="Send"
             myPress={() => navigation.navigate("HomeScreen")}
            />
              </View> 
      </View>
    
  );
};

export default OutPassScreen;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor:'skyblue',
    padding: 10,
    paddingBottom:40,
    paddingTop:5
    
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








