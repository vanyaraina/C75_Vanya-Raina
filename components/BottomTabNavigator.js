import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
       <Tab.Navigator
        screenOptions={{headerShown: true}}>
          <Tab.Screen name="Your Rides" component={RideHistoryScreen} />
          <Tab.Screen name ="Rides" component={RideScreen}/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
