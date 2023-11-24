import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Feather, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View style={{ flex: 1, marginLeft: 20 }}>


      <ScrollView style={{ flex: 1, width: '100%' }}>
        <View style={{ height: 70, width: '100%', marginTop: 20, flexDirection: 'row' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <View style={{ width: '65%', height: '100%', marginLeft: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nguyễn Văn A</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold', marginTop: 5 }}>nguyenvana@gmail.com</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold', marginTop: 5 }}>0842815579</Text>
          </View>
          <View style={{ width: '20%', height: '100%' }}>
            <Feather name="edit" size={24} color="black" />
          </View>

        </View>
        <View style={{ marginTop: 40, marginBottom: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Tài Khoản</Text>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="clipboard-list" size={24} color={"black"} />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Rewards</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>Gói hội viên</Text>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="gift" size={24} color={"black"} />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Thử thách</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome name="credit-card" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Phương thức thanh toán</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="help-with-circle" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Trợ giúp & yêu cầu hổ trợ</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="language" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Thay đổi ngôn ngữ</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Entypo name="location" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Địa điểm quen thuộc</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="people" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Giới thiệu bạn bè</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Thông báo</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialIcons name="security" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Bảo mật tài khoản</Text>
            <View style={{ width: 55, height: '60%', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', borderRadius: 40, marginLeft: 10 }}>
              <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>Mới</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="settings" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Quản lý tài khoản</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 40, marginBottom: 5 }}>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Thông tin chung</Text>
        </View>


        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="clipboard-list" size={24} color={"black"} />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Quy chế</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="clipboard-list" size={24} color={"black"} />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Chính sách bảo mật</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="clipboard-list" size={24} color={"black"} />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Điều khoản dịch vụ</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 10, width: '100%', height: 50, justifyContent: 'space-between', flexDirection: 'row', borderBottomWidth: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="star" size={24} color="black" />
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 700 }}>Đánh giá ứng dụng Gojek</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
            <Text>4.77.0</Text>
          </View>
        </View>


        <View style={{ width: 50, height: 70 }} />


      </ScrollView>



    </View >
  )
}
export default Profile





// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
// // import React from "react";
// import React, { useState } from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// const Tab = createBottomTabNavigator();
// const Profile = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     profilePicture: 'https://placekitten.com/200/200', // Replace with the actual URL of the profile picture
//   });

//   const handleEditProfile = () => {
//     // Implement the edit profile logic
//     console.log('Editing profile...');
//   };
//   return (
//     <View style={styles.container}>
//       <Image style={styles.profilePicture} source={{ uri: user.profilePicture }} />
//       <Text style={styles.label}>Name:</Text>
//       <Text style={styles.info}>{user.name}</Text>
//       <Text style={styles.label}>Email:</Text>
//       <Text style={styles.info}>{user.email}</Text>
//       <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
//         <Text style={styles.editButtonText}>Edit Profile</Text>
//       </TouchableOpacity>
//     </View>

//   );
// };

// export default Profile;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   profilePicture: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//   },
//   label: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   info: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   editButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//   },
//   editButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });