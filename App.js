import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import HomePage from "./pages/HomePage";
import LoginScreen from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import TopUpScreen from "./pages/TopUpPage";
import TransferPage from "./pages/TransferPage";
import HalamanApi from "./pages/HalamanApi";
import Logout from "./pages/Logout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "TopUp") {
            iconName = focused ? "cash" : "cash-outline";
          } else if (route.name === "Transfer") {
            iconName = focused ? "send" : "send-outline";
          } else if (route.name === "HalamanApi") {
            iconName = focused ? "code" : "code-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "exit" : "exit-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="TopUp" component={TopUpScreen} />
      <Tab.Screen name="Transfer" component={TransferPage} />
      <Tab.Screen name="HalamanApi" component={HalamanApi} />
      <Tab.Screen name="Logout" component={Logout} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
