import React,{useState} from 'react';
import { FlatList, View, Text } from 'react-native';
import ListItem from '../components/ListItem1';
import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const Messages = [
    {
        id: 1,
        title: "Warden",
        description:" Your outpass is accepted",
         
        date:"12/11/21"
    },
    {
        id: 2,
        title: "Warden",
        description:"Your outpass is accepted",
     date:"22/10/21"
    },
    
];


const NotificationScreen = ()=>{

     const [messages, setmessage] = useState(Messages);
     
    function click(item){
        //console.log('im pressed', item)
    }
    const [refreshing, setrefreshing] = useState(false);
   
    const deleteItem=(item)=>{
        setmessage(messages.filter((itm)=>itm.id !==item.id))
    }
return(
  <FlatList data={messages}
            keyExtractor={(message)=>message.id.toString()}
            renderItem={({item})=>(
                <ListItem 
                title={item.title} 
                subtitle={item.description} 
                subtitle1={item.date} 
                image={item.image}
                myPress={()=>click(item)}
                renderLeftActions={()=>(<ListItemDeleteAction onPress={()=>deleteItem(item)}></ListItemDeleteAction>)}
    />)}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={()=>setmessage(Messages)}
   />
   
    )}


 export default NotificationScreen;