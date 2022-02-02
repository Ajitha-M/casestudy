import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const StudentScreen=({navigation}) =>{
  return (
    <View style={styles.container}>
      
        <AppButton style={{fontSize:35}} title="Profile"
         myPress={() => navigation.navigate("Profile")}
        
        />
        <AppButton style={{fontSize:35}} title="OutPass"
        myPress={() => navigation.navigate("OutPassScreen")}

        />
        <AppButton style={{fontSize:35}} title="Notification"
        myPress={() => navigation.navigate("NotificationScreen")}
        />
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
      padding:90,
      
      paddingLeft:9,
    //   marginVertical:100,
      backgroundColor:"skyblue"
    //   flexDirection:"column"
  }
});

export default StudentScreen;