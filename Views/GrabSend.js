import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Feather, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

const GrabSend = () => {
    return (
        <View>
            <view style={{ backgroundColor: '#99FFCC' }}>
                <View style={{ width: 80, height: 40, }}>
                    <Pressable onPress={() => navigation.navigate("Home")}  ><AntDesign name="left" size={24} color="black" /></Pressable>
                </View>
                <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}><Text style={{ fontWeight: '600', fontSize: '18', margin: 10 }}>{` Express Xin chào 
    Dịch vụ giao nhận hàng mọi lúc`}</Text>
                    <Image source={require('../assets/bikeviewheader.jpg')} style={{ width: 140, height: 100, marginLeft: 260, marginTop: -79 }}></Image>

                </view>
            </view>
            <Text>GrabSend</Text>
        </View>
    )
}

export default GrabSend

const styles = StyleSheet.create({})