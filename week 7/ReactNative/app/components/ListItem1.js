import React from 'react';
import { Text, StyleSheet, Platform, View, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function ListItem({title,subtitle,subtitle1, image, myPress, renderLeftActions}){
    return (
      <Swipeable renderLeftActions={renderLeftActions}>
       <TouchableHighlight underlayColor='deeppink' onPress={myPress}>

        <View style={styles.container}>
       
        
        <Image style={styles.image} source={image} resizeMode="contain"></Image>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.subtitle1}>{subtitle1}</Text>
          
        </View>
        {/* <MaterialCommunityIcons name='chevron-right' size={30}  style={{marginLeft:120}} /> */}
        </View>
        
        </TouchableHighlight>
        </Swipeable>
    )
}


export default ListItem;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical:20,
        alignItems:"center",
        justifyContent:"space-around",
        width:500,
        height:150,
        flex:1,
        // padding:30,
        paddingRight:370, 
        backgroundColor:"skyblue"
    },
    image:{
        width:100,
        height:100,
        borderRadius:200,
        marginRight:20,
     
    },
    title:{
  fontSize:30,paddingRight:40,
},
subtitle:{
  fontSize:20
},
subtitle1:{
  fontSize:15
}
})