import React from 'react';
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

export default function viewGrabFood({route,}) {
    const [quantity, setQuantity] = useState(1);
    const navigation = useNavigation();
  return (
    <View>
        
          <View style = {{ justifyContent: 'center', alignItems: 'center'}}>
              <Image source={route.params.img} style={{ width: 272, height: 278 }} />
          </View>
          <View
            style={{ width: "100%", justifyContent: "space-around", height: 280 }}
          >
         
        
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
           <Text style={{ width: "100%", fontSize: 20, fontWeight: "700"}}>
                {route.params?.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "rgba(0, 0, 0, 0.54)",
            }}
          >
            {route.params?.description}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            ${route.params?.price}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                source={require("../assets/clock.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "rgba(0, 0, 0, 0.54)",
                }}
              >
                Delivery in
              </Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>30 min</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable
              onPress={() => {
                setQuantity(quantity - 1);
                if (quantity <= 1) {
                  setQuantity(1);
                }
              }}
              style={{
                width: 21,
                height: 21,
                backgroundColor: "rgba(241, 176, 0, 1)",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/subtraction.png")}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
            <TextInput
              keyboardType="numeric"
              style={{
                fontSize: 20,
                fontWeight: "700",
                width: 40,
                textAlign: "center",
              }}
              value={quantity}
            />
            <Pressable
              onPress={() => {
                setQuantity(quantity + 1);
              }}
              style={{
                width: 21,
                height: 21,
                backgroundColor: "rgba(241, 176, 0, 1)",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../assets/plus.png")}
                style={{ width: 20, height: 20 }}
              />
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{ width: "100%", fontSize: 20, fontWeight: "700" }}>
            Restaurants info
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              color: "rgba(0, 0, 0, 0.67)",
            }}
          >
            ${route.params?.moTa}
          </Text>
        </View>
      </View>
      
      <View style = {{flexDirection: 'column', alignItems: "center", justifyContent: 'center', marginTop: 30}}>
            <Pressable onPress={()=>{
                        navigation.navigate('thanhcong')
                      }}>
            <View style= {{marginTop: 10, flexDirection: 'row', marginRight: 10, width: 200, height: 50, borderWidth: 1, justifyContent: "center", alignItems: 'center', borderRadius: 50,backgroundColor: '#33FF00'}}>
                <Text style = {{fontSize: 15, fontWeight: 700}}>
                  Đặt hàng
                </Text>
            </View>
            </Pressable>
           
      </View>
      
    </View>
  )
}
