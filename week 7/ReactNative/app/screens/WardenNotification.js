import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
// import Screen from "../components/Screen";

// import AppText from "../components/AppText";
import AppText from "../components/AppText"
import Screen from "../components/Screen";

const WardenNotification = () => {
  return (
    <ScrollView>
    <Screen style={{backgroundColor:"skyblue"}}>
      <View style={{ flex: 1 }}>
        {/* <View style={styles.continer}>
        <AppText style={{ color: "#2C78E4",fontSize:30}}>Notification</AppText>
          
        </View> */}
       
        <View style={styles.continer1}>
          <View style={{ padding: 20 }}>
            
          <AppText style={styles.text}>Name:Ajitha</AppText>
            <AppText style={styles.text}>dept:BCA</AppText>
            <AppText style={styles.text}>Reason:shopping</AppText>
            <AppText style={styles.text}>date:20/10/21</AppText>
            <View>

            <AppButton title="Accept"></AppButton>
            </View>
          </View>
        </View>
        <View style={styles.continer2}>
          <View style={{ padding: 20 }}>
          
          <AppText style={styles.text}>Name:Priya</AppText>
            <AppText style={styles.text}>dept:BA</AppText>
            <AppText style={styles.text}>Reason:Native</AppText>
            <AppText style={styles.text}>date:11/6/21</AppText>
            <AppButton title="Accept"></AppButton>
          </View>
        </View>
        <View style={styles.continer3}>
          <View style={{ padding: 20 }}>
           
            
          <AppText style={styles.text}>Name:Uma</AppText>
            <AppText style={styles.text}>dept:IT</AppText>
            <AppText style={styles.text}>Reason:Hospital</AppText>
            <AppText style={styles.text}>date:16/10/21</AppText>
            <AppButton title="Accept"></AppButton>
          </View>
        </View>
        <View style={styles.continer4}>
          <View style={{ padding: 20}}>
            
            
            <AppText style={styles.text}>Name:Ajitha</AppText>
            <AppText style={styles.text}>dept:BCA</AppText>
            <AppText style={styles.text}>Reason:shopping</AppText>
            <AppText style={styles.text}>date:20/9/21</AppText>
            <AppButton title="Accept"></AppButton>
          </View>
        </View>



        <View style={styles.continer5}>
          <View style={{ padding: 20 }}>
            
            
          <AppText style={styles.text}>Name:Ajitha</AppText>
            <AppText style={styles.text}>dept:BCA</AppText>
            <AppText style={styles.text}>Reason:shopping</AppText>
            <AppText style={styles.text}>date:20/9/21</AppText>
            <AppButton  title="Accept"></AppButton>
          </View>
        </View>

      </View>
    </Screen>
    </ScrollView>
  );
};

export default WardenNotification;
const styles = StyleSheet.create({
  continer: {
    alignItems: "center",
    marginBottom:5,
    marginTop:50,
    backgroundColor:"skyblue"
    
   
  },
  continer1: {
    height: 157,
    width: 363,
    borderRadius: 15,
    margin: 10,
    // fontSize:20,
    //  backgroundColor:"",
    marginTop: "10%",
  },
  continer2: {
    paddingTop: 5,
    paddingLeft: 5,
    height: 170,
    width: 363,
    margin: 10,
    // backgroundColor: "Skyblue",
  },
  continer3: {
    paddingTop: 5,
    paddingLeft: 5,
    height: 170,
    width: 363,
    margin: 10,
    // backgroundColor: "#F7F7FA",
  },
  continer4: {
    paddingTop: 5,
    paddingLeft: 5,
    height: 170,
    width: 363,
    margin: 10,
    // backgroundColor: "#F7F7FA",
  },
  continer5: {
    paddingTop: 5,
    paddingLeft: 5,
    height: 170,
    width: 363,
    margin: 10,
    //  backgroundColor: "#F7F7FA",
  },
  text:{
    marginTop:4,
    marginVertical:0.5,
    fontSize:20
  }
});




