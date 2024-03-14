import React from 'react'
import { SafeAreaView, StyleSheet, Text, Platform, StatusBar } from 'react-native'

const UpcomingWeather = () => {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {

    }
})

export default UpcomingWeather

// https://www.youtube.com/watch?v=obH0Po_RdWk