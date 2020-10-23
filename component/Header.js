import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

function Header({title}) {
    return (
       <View style={styles.header}>
           <Text style={styles.text}>{title}</Text>
       </View>
    )
}

const styles=StyleSheet.create({
    header:{
        height:60,
        backgroundColor:"darkslateblue",
        padding:15
    },
    text:{
        color:"#fff",
        fontSize:23,
        textAlign:"center",
        textTransform:"uppercase",
        fontWeight:"bold"
        
    }
})

export default Header
