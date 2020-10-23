import React,{useState} from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native'
import Header from './component/Header'
import ItemList from './component/ItemList'

const App=()=>{
 const [items,setItems]=useState([
   {id:1,text:"Milk"},
   {id:2,text:"Eggs"},
   {id:3,text:"Bread"},
   {id:4,text:"Juice"},

 ])
  return(
    <View >
     <Header title="Shopping List" />
     <FlatList 
       data={items}
       renderItem={({item})=><ItemList item={item} />} 
     />
    </View>
  )
}
const styles=StyleSheet.create({
 

})
export default App;