import { View, Text, StatusBar, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white', }}>
<<<<<<< HEAD

      <StatusBar style='light' />
      <View >
        <View style={{ height: 150, width: '100%', }}>

          <View>
            <View style={{ flexDirection: 'row', width: '100%', height: 90, marginTop: 10, marginLeft: 10, alignItems: 'center', }}>
              <Image style={{ width: 80, height: 80 }} source={require('../image/icon-messenger.png')} resizeMode='stretch' />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable onPress={() => {
                  navigation.navigate('GrabBike')
                }}>
                  <Text style={{ fontSize: 18, fontWeight: '500' }}>Bạn chưa có tin nhắn</Text>
                </Pressable>

              </View>
            </View>


            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Image source={require('../assets/text.png')} style={{ width: 400, height: 400, marginTop: 70 }}></Image>



                </view>
              </View>
            </View>



=======

      <StatusBar style='light' />
      <View >
      <View style={{ height: 150, width: '100%' , }}>
       
      <View>
        <View style={{ flexDirection: 'row', width: '100%', height: 90, marginTop: 10, marginLeft: 10, alignItems: 'center',}}>
          <Image style={{ width: 80, height: 80 }} source={require('../image/icon-messenger.png')} resizeMode='stretch' />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Pressable  onPress={()=>{
                        navigation.navigate('GrabBike')
                    }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Bạn chưa có tin nhắn</Text>
            </Pressable>
            
>>>>>>> 8373a86635cec505491666fd1222750627ccd65a
          </View>
        </View>


        <View style={{  flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }}>
        <View style={{  flexDirection: 'row', justifyContent: 'center',alignItems: 'center' }}>
        <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Image source={require('../assets/text.png')} style={{ width: 400, height: 400, marginTop: 70 }}></Image>
                    
                    

                </view>
        </View>
        </View>

       
        
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
}
