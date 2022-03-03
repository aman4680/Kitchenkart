// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   StatusBar,
//   TouchableHighlight,
//   TouchableOpacity,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   RefreshControl
// } from 'react-native';

// import { icons, images, SIZES, COLORS, FONTS } from '../constants';
// import { categoryData, restaurantData } from '../../components/Data/RestaurantsData';
// import ShopNavigator from '../../navigation/ShopNavigator';

// // import { useTheme } from '@react-navigation/native';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import StarRating from '../../components/Data/StarRating';
// import CreatingList from './CreatingList';
// import HeartButton from '../components/buttons/HeartButton';

// import colors from '../styles1/colors';
// import ListingsOne from '../components/explore/ListingsOne';
// import lists from '../data/listings';
// import DisplayMenu from './DisplayMenu';
// import ProductItem from './ProductItem';

// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

// const HomeScreen = ({navigation}) => {
//     // const { colors } = useTheme();
//     // const theme = useTheme();
//     const [refreshing, setRefreshing] = React.useState(false);

//     const onRefresh = React.useCallback(() => {
//       setRefreshing(true);
//       wait(1500).then(() => setRefreshing(false));
//     }, []);

//     const initialCurrentLocation = {
//       streetName: "Kuching",
//       gps: {
//           latitude: 1.5496614931250685,
//           longitude: 110.36381866919922
//       }
//     }

//   // const [ favouriteListings, setFavouriteListings ] = useState([]);

//     const [categories, setCategories] = useState(categoryData)
//     const [selectedCategory, setSelectedCategory] = useState(null)
//     const [restaurants, setRestaurants] = useState(restaurantData)
//     const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)    

//     const onSelectCategory = (category) => {
//       //filter restaurant
//       let restaurantList = restaurants.filter(a => a.categories.includes(category.id))
//       setRestaurants(restaurantList)
//       setSelectedCategory(category)
//     }

//     const getCategoryNameById = (id) => {
//       let category = categories.filter(a => a.id == id)

//       if (category.length > 0)
//           return category[0].name
  
//       return ""
//     }

//     // const renderHeader = () => {
//     //   return (
//     //       <View style={{ flexDirection: 'row', height: 50 }}>
//     //         <TouchableOpacity
//     //             style={{
//     //                 width: 50,
//     //                 paddingLeft: SIZES.padding * 2,
//     //                 justifyContent: 'center'
//     //             }}
//     //         >
//     //           <Image
//     //               source={icons.nearby}
//     //               resizeMode="contain"
//     //               style={{
//     //                   width: 30,
//     //                   height: 30
//     //               }}
//     //           />
//     //         </TouchableOpacity>

//     //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     //           <View
//     //             style={{
//     //                 width: '70%',
//     //                 height: "100%",
//     //                 backgroundColor: COLORS.lightGray3,
//     //                 alignItems: 'center',
//     //                 justifyContent: 'center',
//     //                 borderRadius: SIZES.radius
//     //             }}
//     //           >
//     //             <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
//     //           </View>
//     //         </View>
            
//     //         <TouchableOpacity
//     //             style={{
//     //                 width: 50,
//     //                 paddingRight: SIZES.padding * 2,
//     //                 justifyContent: 'center'
//     //             }}
//     //         >
//     //           <Image
//     //               source={icons.basket}
//     //               resizeMode="contain"
//     //               style={{
//     //                   width: 30,
//     //                   height: 30
//     //               }}
//     //           />
//     //         </TouchableOpacity>
//     //       </View>
//     //   )
//     // }

//     const renderMainCategories = () => {
//       const renderItem = ({ item }) => {
//         return (
//           <TouchableOpacity
//             style={[styles.shadow, {
//                 padding: SIZES.padding,
//                 paddingBottom: SIZES.padding * 2,
//                 backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
//                 borderRadius: SIZES.radius,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginRight: SIZES.padding,
//               }                    
//             ]}
//             onPress={() => onSelectCategory(item)}
//           >
//             <View
//               style={{
//                 width: 50,
//                 height: 50,
//                 borderRadius: 25,
//                 alignItems: "center",
//                 justifyContent: "center",
//                 backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
//               }}
//             >
//               <Image
//                   source={item.icon}
//                   resizeMode="contain"
//                   style={{
//                       width: 30,
//                       height: 30
//                   }}
//               />
//             </View>

//             <Text
//                 style={{
//                     marginTop: SIZES.padding,
//                     color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
//                     ...FONTS.body5
//                 }}
//             >
//                 {item.name}
//             </Text>
//           </TouchableOpacity>
//         )
//       }

//       return (
//         <View style={{ padding: SIZES.padding * 2 }}>
//           <Text style={{ ...FONTS.h1 }}>Main</Text>
//           <Text style={{ ...FONTS.h1 }}>Categories</Text>
//           <FlatList
//             data={categories}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             keyExtractor={item => `category-${item.id}`}
//             renderItem={renderItem}
//             contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
//           />
//         </View>
//       )
//     }

//     // const renderRestaurantList = () => {
//     //   const renderItem = ({ item }) => {
//     //     return (
//     //       <TouchableOpacity
//     //         style={{ marginBottom: SIZES.padding * 2 }}
//     //         onPress={() => navigation.navigate("Description", {
//     //             item,
//     //             currentLocation
//     //         })}
//     //       >
//     //         {/* Image */}
//     //         <View
//     //             style={{
//     //                 marginBottom: SIZES.padding
//     //             }}
//     //         >
//     //           <Image
//     //             source={item.photo}
//     //             resizeMode="cover"
//     //             style={{
//     //                 width: "100%",
//     //                 height: 200,
//     //                 borderRadius: SIZES.radius
//     //             }}
//     //           />
//     //         </View>

//     //         {/* Restaurant Info */}
//     //         <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

//     //         <View
//     //           style={{
//     //               marginTop: SIZES.padding,
//     //               flexDirection: 'row'
//     //           }}
//     //         >
//     //           {/* Rating */}
//     //           <Image
//     //               source={icons.star}
//     //               style={{
//     //                   height: 20,
//     //                   width: 20,
//     //                   tintColor: COLORS.primary,
//     //                   marginRight: 10
//     //               }}
//     //           />
//     //           <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

//     //           {/* Categories */}
//     //           <View
//     //               style={{
//     //                   flexDirection: 'row',
//     //                   marginLeft: 10
//     //               }}
//     //           >
//     //             {
//     //               item.categories.map((categoryId) => {
//     //                   return (
//     //                       <View
//     //                           style={{ flexDirection: 'row' }}
//     //                           key={categoryId}
//     //                       >
//     //                           <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
//     //                           <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
//     //                       </View>
//     //                   )
//     //               })
//     //             }

//     //             {/* Price */}
//     //             {
//     //                 [1, 2, 3].map((priceRating) => (
//     //                     <Text
//     //                         key={priceRating}
//     //                         style={{
//     //                             ...FONTS.body3,
//     //                             color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
//     //                         }}
//     //                     >$</Text>
//     //                 ))
//     //             }
//     //           </View>
//     //         </View>
//     //       </TouchableOpacity>
//     //     )
//     //   }

//     //   return (
//     //     <FlatList
//     //       data={restaurants}
//     //       keyExtractor={item => `restaurant-${item.id}`}
//     //       renderItem={renderItem}
//     //       contentContainerStyle={{
//     //           paddingHorizontal: SIZES.padding * 2,
//     //           paddingBottom: 30
//     //       }}
//     //     />
//     //   )
//     // }



//     const displayMenu = () => {
//       const restaurantMenu = restaurants[1].menu;
          
//       return restaurantMenu.map((item, index) => (
//         <View style={styles.cardsWrapper} key={item.menuId}>
//           <TouchableOpacity
//             style={{ marginBottom: SIZES.padding-10 }}
//             onPress={() => navigation.navigate("Description", {                    
//                 item,
//                 currentLocation
//             })}
//           >
            
//             <View style={styles.card}>   

//               {/* Image */}
//               <View style={styles.cardImgWrapper}>                
//                 <Image
//                   source={item.photo}
//                   resizeMode="cover"
//                   style={styles.cardImg}
//                 />
//               </View> 

//               {/* Restaurant Info */}
//               <View style={styles.cardInfo}>
//                 <Text style={styles.cardTitle}>{item.name}</Text>                
//                 {/* <Text style={[styles.cardDetails, {fontSize: 16}]} numberOfLines={2}>{item.description}</Text>                 */}
//                 <StarRating ratings={4} reviews={99} />
//                 <Text style={styles.cardDetails}>{item.calories} calories </Text>
//                 <View style={{flexDirection: "row", width: 60}}>
//                   <Text style={styles.cardDetails}>Rs. </Text>
//                   <Text style={[styles.cardDetails, {fontSize: 20, fontWeight: "bold"}]}>{item.price}</Text>
//                 </View>
//               </View>             
            
//             </View>                            
//           </TouchableOpacity>
//         </View>
//         ))
//     }

//     // const displayMenuTwo = () => {
//     //   const restaurantMenu = restaurants[1].menu;
//     //   return (
//     //     <FlatList 
//     //       data={restaurantMenu}
//     //       keyExtractor={item => item.menuId}
//     //       renderItem={itemData => (
//     //         <ProductItem
//     //           image={itemData.item.photo}
//     //           title={itemData.item.name}
//     //           price={itemData.item.price}
//     //           description={itemData.item.description}
//     //           calories={itemData.item.calories}
//     //           onViewDetail={() => {
//     //             navigation.navigate("Description", { productId: itemData.item.id })
//     //           }}
//     //           onAddToCart={() => {}}
//     //         />
//     //       )}
//     //     />
//     //   )
//     // } 

//     const renderListings = () => {
//       return lists.map((list, index) => (
//         <View key={`list-${index}`} >
//           <ListingsOne
//             key={`list-item-${index}`}
//             title={list.title}
//             boldTitle={list.boldTitle}
//             listings={list.listings}
//             showAddToFav={list.showAddToFav}
//             handleAddToFav={handleAddToFav}
//             // favouriteListings={favouriteListings}
//           />
//         </View>
//       ));
//     }

//     return (
//       <ScrollView refreshControl={
//         <RefreshControl
//           refreshing={refreshing}
//           onRefresh={onRefresh}
//         />
//       }>
//         {/* <ShopNavigator /> */}
//         {renderListings()}
//         {displayMenu()}
//       </ScrollView>              
//     )
// }

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },

//   wrapper: {},

//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#fdeae7' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#de4f35',
//   },
//   cardsWrapper: {
//     width: '98%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 130,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,    
//   },
//   cardImg: {
//     height: '100%',
//     width: 130,
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//   },
//   cardInfo: {  
//     flex: 2,  
//     paddingLeft: 20,
//     paddingTop: 15,
//     paddingBottom: 15,
//     flexDirection: "column",
//     justifyContent: "space-around",
//     borderColor: '#ccc',
//     borderWidth: 1,
//     // borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontSize: 20,
//   },
//   cardDetails: {
//     fontSize: 14,
//     color: '#444',
//   },
//   shadow: {
//     shadowColor: "#000",
//     shadowOffset: {
//         width: 0,
//         height: 3,
//     },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 1,
// },
// });


import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import Carousel from '../DDcomponents/Carousel';
import { productsData } from '../data/ProductsData';
import RenderProducts from '../DDcomponents/RenderProducts';
import CalenderScreen from '../DDcomponents/CalenderScreen';
import { Agenda } from 'react-native-calendars'


const offer1 = require('../data/photos/offer1.jpg');
const offer2 = require('../data/photos/offer2.jpg');
const offer3 = require('../data/photos/offer3.jpg');

const images = [
  {
    id: 1,
    photo: offer1,
  },
  {
    id: 2,
    photo: offer2,
  },
  {
    id: 3,
    photo: offer3,
  },
]

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomeScreenCopy = ({navigation}) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(1500).then(() => setRefreshing(false));
    }, []);

  return (
    <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
    }>
        <View>
            <Carousel data={images}/>
            <TouchableOpacity onPress={() => {navigation.navigate("Calender")}}>
              <View style={{ height: 130 }}>
                <Agenda />
              </View>
            </TouchableOpacity>
            <RenderProducts data={productsData} />
        </View>
    </ScrollView>
  );
};

export default HomeScreenCopy;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});