import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React from 'react'

import { Feather, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
const GrabFood = () => {
    return (
        <View>
            <view style={{ backgroundColor: '#99FFCC' }}>
                <View style={{ width: 80, height: 40, }}>
                    <Pressable onPress={() => navigation.navigate("Home")}  ><AntDesign name="left" size={24} color="black" /></Pressable>
                </View>
                <view style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}><Text style={{ fontWeight: '600', fontSize: '18', margin: 10 }}>{` Di chuyển 
    Chúng tối đưa bạn đến bất kỳ đâu!`}</Text>
                    <Image source={require('../assets/bikeviewheader.jpg')} style={{ width: 140, height: 100, marginLeft: 260, marginTop: -79 }}></Image>

                </view>
            </view>
            <View style={{ backgroundColor: 'white', marginLeft: 10, borderRadius: 100, padding: 10, flexDirection: 'row', alignItems: 'center', width: 400 }}>
                <Feather name="search" size={24} color="black" />
                <TextInput placeholder='Bạn đang thèm gì nào?' style={{ fontSize: 15, color: 'gray', width: 400, height: 30 }}></TextInput >
            </View>
        </View>
    )
}

export default GrabFood

const styles = StyleSheet.create({})