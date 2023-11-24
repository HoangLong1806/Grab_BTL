// import {
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
//   map,
//   Image,
//   Button,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Tab = createBottomTabNavigator();
// var data = [];
// var url = "https://655841139c0b643cb2d6e996.mockapi.io/Chat";
// const Chat = () => {
//   var [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         data = json;
//         console.log(data);
//         setData(data);
//       });
//   }, []);
//   return (
//     <View>
//       {data.map((item) => {
//         return (
//           <View
//             key={item.id}
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               justifyContent: "flex-start",
//               alignItems: "center",

//             }}
//           >
//             <Image
//               style={{
//                 width: 40, height: 40, borderRadius: 100, margin: 10,
//               }}
//               source={{ uri: item.avatar }}
//             />
//             <Text
//               style={{
//                 color: "Black",

//               }}
//             >
//               <h4>{item.name}</h4>
//               {item.title}


//             </Text>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// export default Chat;

// const styles = StyleSheet.create({});
import { View, Text, StatusBar, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
export default function Chat() {
  return (
    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
      <StatusBar style='light' />
      {/* Component Header */}
      {/* <View style={{ height: '5%', width: '100%', borderBottomWidth: 1, justifyContent: 'center', borderColor: 'gray' }}>
        <Text style={{ fontSize: 24, marginLeft: 20, fontWeight: 600 }}>Hộp thư</Text>
      </View> */}

      {/* component tương tác */}
      {/* <View style={{ height: 150, width: '100%' }}>
        <View style={{}}>
          <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 20, marginTop: 20 }}>Thao tác nhanh</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <View style={{ height: 50, width: 50, marginTop: 20, marginLeft: 30 }}>
              <Image style={{ width: 40, height: 40 }} source={require('../image/mail.png')} resizeMode='stretch' />
              <Text style={{ fontSize: 12, fontWeight: 500, marginLeft: 10, paddingTop: 5 }}>Thư</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <View style={{ height: 50, width: 50, marginTop: 20, marginLeft: 30 }}>
              <Image style={{ width: 40, height: 40 }} source={require('../image/help.png')} resizeMode='stretch' />
              <Text style={{ fontSize: 12, fontWeight: 500, paddingTop: 5 }}>Support</Text>
            </View>
          </TouchableOpacity>

        </View>


      </View> */}

      {/* component trò chuyện*/}
      <View style={{ height: 150, width: '100%' }}>
        {/* <View>
          <Text style={{ fontSize: 20, fontWeight: 500, marginLeft: 20, marginTop: 20 }}>Trò chuyện</Text>
        </View> */}

        <View style={{ flexDirection: 'row', width: '100%', height: 90, marginTop: 10, marginLeft: 10, alignItems: 'center' }}>
          <Image style={{ width: 80, height: 80 }} source={require('../image/icon-messenger.png')} resizeMode='stretch' />
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: '500' }}>Bạn chưa có tin nhắn</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
