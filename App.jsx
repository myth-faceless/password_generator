import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style = {{flex:1, backgroundColor: "tomato", justifyContent: 'center', alignItems:'center'}}>
      <Text style = {{color: 'white', fontSize: 25}}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})