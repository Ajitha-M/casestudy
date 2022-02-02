import React from 'react'
import {ImageBackground,StyleSheet,SafeAreaView, View,Image,Text,Platform, Button, Alert} from 'react-native'
import AppButton from '../components/AppButton'


const WelcomeScreen = ({navigation}) =>{

    var login=() => {
       
        console.log("Login btn clicked")
        // Alert.alert('alert','login yes or no',
        // [
        //   {text:'YES',onPress:()=>console.log('yes')},
        //   {text:'NO',onPress:()=>console.log('no')}
        // ]
        // )
    } 
    var register=() => {
     
        console.log("Register btn clicked")
        // Alert.alert('alert','register yes or no',
        // [
        //   {text:'YES',onPress:()=>console.log('yes')},
        //   {text:'NO',onPress:()=>console.log('no')}
        // ]
        // )
    } 
      
return(
    
    <View style={styles.container}>

    <View style={styles.imageContainer}>
    <Text style={{fontSize:35}}>WELCOME TO</Text> 
    <Text style={{fontSize:35}}>HOSTEL MANAGEMENT</Text> 
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/images.jpg')}></Image>
    </View>
    
    <AppButton title="STUDENT LOGIN" 
    color="primary"
     myPress={login}
     myPress={() => navigation.navigate("Login")}/>

    <AppButton title="WARDEN LOGIN" 
    color="secondary" 
    myPress={register} 
    style={{backgroundColor:'#4ECDC4'}}
    myPress={() => navigation.navigate("WardenLogin")}/>
 
    </View>
    
)
}


export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'flex-end',
        backgroundColor:'skyblue',
        padding: Platform.OS==='android'?25:0

    },
    image:{
        height:500,
        width:500,  
    },
    imageContainer:{
        position:'absolute',
        top:80,
        alignItems:'center'
    }

});
