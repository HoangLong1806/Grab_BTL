import { View, Text, StatusBar, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flatListImgCar = [
  {
    id: 1,
    image: require('../assets/voucher1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/voucher2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/voucher3.jpg'),
  },
  {
    id: 4,
    image: require('../assets/voucher4.jpg'),
  },

]
const flatListImgFood = [
  {
    id: 1,
    image: require('../assets/voucher-food3.jpg'),
  },
  {
    id: 2,
    image: require('../assets/voucher-food2.jpg'),
  },
  {
    id: 3,
    image: require('../assets/voucher-food1.jpg'),
  },
  {
    id: 4,
    image: require('../assets/voucher-food4.jpg'),
  },

]
const flatListImgSend = [
  {
    id: 1,
    image: require('../assets/send1.jpg'),
  },
  {
    id: 2,
    image: require('../assets/send2.jpg'),
  },


]

const renderItemCar = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}
const renderItemFood = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}
const renderItemSend = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}

export default function Home(navigate) {

  const [dataCar, setDataCar] = useState(flatListImgCar);
  const [dataFood, setDataFood] = useState(flatListImgFood);
  const [dataSend, setDataSend] = useState(flatListImgSend);
  const [isRender, setisRender] = useState(false);




  return (

    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

      <StatusBar barStyle='dark-content' />
      {/* Component Header */}
      <View style={{ height: 70, width: '100%', backgroundColor: 'green', flexDirection: 'row' }}>
        {/* Search */}
        <View style={{ width: '70%', height: 70, marginTop: 12 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', marginLeft: 10, borderRadius: 100, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder='Tìm dịch vụ, món ngon, địa điểm' style={{ fontSize: 15, color: 'gray' }}></TextInput >
            </View>
          </TouchableOpacity>
        </View>
        {/* User */}
        <View style={{ width: 120, height: 120, alignItems: 'center', marginTop: 12 }}>
          <TouchableOpacity style={{ height: '35%', width: '40%' }}
            onPress={() => navigation.navigate('Thông Tin Tài Khoản')}
          >
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
              <FontAwesome name="user" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Component Body */}
      <View style={{ height: '85%', width: '100%', flexDirection: 'column', backgroundColor: 'white' }}>
        <ScrollView style={{ marginHorizontal: 10 }} pagingEnabled={true} >
          {/* Component service */}
          <View style={{ height: 100, width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
            {/* Image goride */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('GrabBike')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20, borderRadius: '100%' }} source={require('../assets/bikes.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Xe máy</Text>
              </View>
            </TouchableOpacity>

            {/* Image gocar */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('Gocar')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20, borderRadius: '100%', }} source={require('../assets/gocar.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Ô tô</Text>
              </View>
            </TouchableOpacity>


            {/* Image gofood */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('Gofood')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20, borderRadius: '100%' }} source={require('../assets/gofood2.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Đồ ăn</Text>
              </View>
            </TouchableOpacity>

            {/* Image gosend */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('Gosend')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20 }} source={require('../image/gosend.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Giao Hàng</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Component QC */}
          {/* <View style={{ backgroundColor: 'green', height: 250, width: '100%' }}>
            <TouchableOpacity style={{ alignContent: 'center' }}>
              <Image style={{ width: '100%', height: '100%' }} source={require('../image/grab-qc.jpg')} resizeMode='stretch' />
            </TouchableOpacity>
          </View> */}

          {/* Component Gocar Goride */}
          <View style={{ height: 400, width: '100%' }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/search.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Đặt ngay</Text>
              </View>
            </View>

            <View style={{ height: 30, width: '100%' }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5 }}>Đặt ngay, càng đặt càng lời</Text>
            </View>

            {/* scrollview gocar goride */}
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataCar}
                renderItem={renderItemCar}
                horizontal={true}
                style={{ marginTop: 10 }}>
              </FlatList>
            </View>


            {/* <View style={{ backgroundColor: 'white', height: 70, width: '100%', flexDirection: 'row' }}>
              <Text style={{ fontSize: 18, color: 'gray' }}>
                <View style={{ width: 30, height: 30 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../image/car1.png')} resizeMode='stretch' />
                </View>
                <View style={{ width: 20, height: 30, marginHorizontal: 5 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../image/bike.png')} resizeMode='stretch' />
                </View>
                Đặt xe đi học,đi làm,đi chill giảm ngay 50% với mã GOJEKNHA và GOCARNHA</Text>
            </View> */}
          </View>

          {/* Component Gofood */}
          <View style={{ height: 400, width: '100%' }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/cutlery.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Đặt đồ ăn ngay</Text>
              </View>
            </View>

            <View style={{ height: 30, width: '100%' }}>
              <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 5 }}>Ở đây có món ngon bạn thích!</Text>
            </View>

            {/* <View style={{ backgroundColor: 'white', height: 70, width: '100%', flexDirection: 'row' }}>
              <Text style={{ fontSize: 18, color: 'gray' }}>
                <View style={{ width: 30, height: 30 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../image/hamburger.png')} resizeMode='stretch' />
                </View>
                Yêu thích chiếc bụng đói với vũ trụ món ngon trên GooFood nha!</Text>
            </View> */}

            {/* scrollview gofood */}
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataFood}
                renderItem={renderItemFood}
                horizontal={true}
                style={{ marginTop: 10 }}>
              </FlatList>
            </View>
          </View>


          {/* Component Gosend */}
          <View style={{ height: 450, width: '100%' }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/gift-box.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Giao hàng ngay</Text>
              </View>
            </View>

            {/* <View style={{ height: 30, width: '100%' }}>
              <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 5 }}></Text>
            </View> */}

            <View style={{ backgroundColor: 'white', height: 50, width: '100%', flexDirection: 'row' }}>
              <Text style={{ fontSize: 18, color: 'gray' }}>
                <View style={{ width: 30, height: 30 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../image/giftbox.png')} resizeMode='stretch' />
                </View>
                Giao hàng nhanh có Grab Express</Text>
            </View>

            {/* scrollview gosend */}
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataSend}
                renderItem={renderItemSend}
                horizontal={true}
                style={{ marginTop: 10 }}>
              </FlatList>
            </View>
          </View>
          {/* <View style={{height:70,width:'100%'}}/> */}
        </ScrollView>
      </View>
      <View style={{ width: '100%', height: 200 }} />

    </SafeAreaView>

  )
}

{/* <TextInput placeholder='Search'style={{backgroundColor:'white',marginLeft:10,marginTop:'30%',borderRadius:100,padding:10}}/> */ }
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Pressable,
//   Image,
//   Dimensions,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import SlideImage from "./SlideImage";
// // import Swiper from "react-native-swiper";

// const Tab = createBottomTabNavigator();
// const Home = () => {
//   return (
//     <View
//       style={{
//         backgroundColor: "fffff",
//         flex: 1,
//       }}
//     >
//       <View style={styles.Name}>
//         <Image
//           source={require("../assets/kinhlup.png")}
//           style={{ width: 34, height: 34, marginLeft: 5 }}
//         ></Image>
//         <TextInput
//           placeholder="Tìm kiếm "
//           style={{
//             with: "300px",
//             height: "35px",
//             marginTop: "5px",
//             marginLeft: 30,
//           }}
//         ></TextInput>
//       </View>
//       {/* button */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "flex-start",
//           flex: 1,
//           width: 500,
//           marginTop: 20,
//           flex: 9,
//         }}
//       >
//         <Pressable
//           onPress={() => {
//             navigation.navigate("menu");
//           }}
//           style={{
//             width: 332,
//             height: 34,
//             marginLeft: 10,
//           }}
//         >
//           <Image
//             source={require("../assets/bikes.png")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "100%",
//               borderWidth: "100%",
//             }}
//           />
//           <Text style={{ fontSize: 15, fontWeight: 40, margin: 5 }}>Xe máy</Text>
//         </Pressable>
//         <Pressable
//           style={{
//             width: 332,
//             height: 34,
//             marginLeft: -270,
//           }}
//         >
//           <Image
//             source={require("../assets/bikes.png")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "100%",
//               borderWidth: "100%",
//             }}
//           />
//           <Text style={{ fontSize: 15, fontWeight: 40, margin: 5 }}>ô tô</Text>
//         </Pressable>
//         <Pressable
//           style={{
//             width: 332,
//             height: 34,
//             marginStart: -270,
//           }}
//         >
//           <Image
//             source={require("../assets/bikes.png")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "100%",
//               borderWidth: "100%",
//             }}
//           />
//           <Text style={{ fontSize: 15, fontWeight: 40, margin: 5 }}>Đồ ăn</Text>
//         </Pressable>
//         <Pressable
//           style={{
//             width: 332,
//             height: 34,
//             marginStart: -270,
//           }}
//         >
//           <Image
//             source={require("../assets/bikes.png")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "100%",
//               borderWidth: "100%",
//             }}
//           />
//           <Text
//             style={{ fontSize: 15, fontWeight: 40, margin: 5, marginLeft: -5 }}
//           >
//             Gửi hàng
//           </Text>
//         </Pressable>
//         <Pressable
//           style={{
//             width: 332,
//             height: 34,
//             marginStart: -270,
//           }}
//         >
//           <Image
//             source={require("../assets/bikes.png")}
//             style={{
//               width: 40,
//               height: 40,
//               borderRadius: "100%",
//               borderWidth: "100%",
//             }}
//           />
//           <Text style={{ fontSize: 15, fontWeight: 40, margin: 5 }}>Tất cả</Text>
//         </Pressable>
//       </View>
//       <view>

//       </view>
//     </View >
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   Name: {
//     flex: 1,
//     width: "340px",
//     height: "54px",
//     marginTop: 10,
//     marginLeft: "15px",
//     borderWidth: "1px",
//     borderRadius: "5px",
//     alignItems: "center",
//     flexDirection: "row",
//   },
// });