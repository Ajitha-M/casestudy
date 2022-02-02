import React from 'react';
import { View, StyleSheet,Text,Image} from 'react-native';

const HomeScreen1 = () =>{

  return (
    <View style={styles.container}>

    <View style={styles.imageContainer}>
    <Image style={styles.images} resizeMode='contain' source= {require('../../assets/images.png')}></Image>
    
    <Text style={{fontSize:35}}>HOSTEL MANAGEMENT</Text> 
      <Image style={styles.image} resizeMode='contain' source= {require('../../assets/hostel.jpg')}></Image>
    </View>
    </View>
  );
}

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
images:{
  height:50,
  width:50,
  alignItems:'flex-start'
},
imageContainer:{
  position:'absolute',
  top:70,
  alignItems:'center'
}

});

export default HomeScreen1;