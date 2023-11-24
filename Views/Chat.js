import { View, Text, StatusBar, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
      <StatusBar style='light' />
      
      <View style={{ height: 150, width: '100%' }}>
       

        <View style={{ flexDirection: 'row', width: '100%', height: 90, marginTop: 10, marginLeft: 10, alignItems: 'center' }}>
          <Image style={{ width: 80, height: 80 }} source={require('../image/icon-messenger.png')} resizeMode='stretch' />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Pressable  onPress={()=>{
                        navigation.navigate('GrabBike')
                    }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Bạn chưa có tin nhắn</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
