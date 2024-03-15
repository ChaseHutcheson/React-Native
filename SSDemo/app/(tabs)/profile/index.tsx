import { View, Text, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <SafeAreaView style={{marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0}}>
        <View>
            <Text>Hello, World</Text>
        </View>
    </SafeAreaView>
  )
}

export default index