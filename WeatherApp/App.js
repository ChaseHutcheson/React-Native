import { View, StyleSheet } from "react-native"
import CurrentWeather from "./src/components/CurrentWeather"
import UpcomingWeather from "./src/components/UpcomingWeather"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SafeAreaProvider } from "react-native-safe-area-context"

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={"Current"}
            component={CurrentWeather}
            options={{
              headerShown: false,
            }}
          />
          <Tab.Screen
            name={"Upcoming"}
            component={UpcomingWeather}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App