import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Actions from "./Views/Actions";
import Home from "./Views/Home";
import Chat from "./Views/Chat";
import Pay from "./Views/Pay";
import Profile from "./Views/Profile";
import GrabBike from './Views/GrabBike'
import GrabCar from './Views/GrabCar'
import GrabFood from './Views/GrabFood'
import GrabSend from './Views/GrabSend'
const Tab = createBottomTabNavigator();
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          headerShown: false,
          // screenOptions
        }}
      >
        <Tab.Screen
          name="Trang chủ"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Hoạt động"
          component={Actions}
          options={{
            tabBarLabel: "Hoạt động",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="clipboard-list"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tin nhắn"
          component={Chat}
          options={{
            tabBarLabel: "Tin nhắn",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="message" color={color} size={size} />
              // <Icon name='home'/>
            ),
          }}
        />
        <Tab.Screen
          name="Thanh toán"
          component={Pay}
          options={{
            tabBarLabel: "Thanh toán",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="credit-card"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={Profile}
          options={{
            tabBarLabel: "Tài khoản",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// function StackHome() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//         <Stack.Screen name='Home' component={Home} />
//         <Stack.Screen name='GrabBkie' component={GrabBike} />
//         <Stack.Screen name="GrabCar" component={GrabCar} />
//         <Stack.Screen name="GrabFood" component={GrabFood} />
//         <Stack.Screen name="GrabSend" component={GrabSend} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }