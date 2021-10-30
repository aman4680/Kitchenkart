import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    Pressable
} from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";
import HeartButton from "../components/buttons/HeartButton";

import { icons, COLORS, SIZES, FONTS } from '../constants';

import colors from '../styles1/colors';
import QuantitySelector from "./QuantitySelector";

const Description = ({ route, navigation }) => {

    const showAddToFav = true;
    const scrollX = new Animated.Value(0);
    const [restaurantMenuItem, setRestaurantMenuItem] = useState({});
    const [currentLocation, setCurrentLocation] = useState(null);
    const [orderItems, setOrderItems] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [cartArray, setCartArray] = useState([]);

    useEffect(() => {
        let { item, currentLocation } = route.params;

        setRestaurantMenuItem(item)
        setCurrentLocation(currentLocation)
    })

    const editOrder = (action, menuId, price) => {
        let orderList = orderItems.slice()
        let item = orderList.filter(a => a.menuId == menuId)

        if (action == "+") {
            if (item.length > 0) {
                let newQty = item[0].qty + 1
                item[0].qty = newQty
                item[0].total = item[0].qty * price
            } else {
                const newItem = {
                    menuId: menuId,
                    qty: 1,
                    price: price,
                    total: price
                }
                orderList.push(newItem)
            }

            setOrderItems(orderList)
        } else {
            if (item.length > 0) {
                if (item[0]?.qty > 0) {
                    let newQty = item[0].qty - 1
                    item[0].qty = newQty
                    item[0].total = newQty * price
                }
            }

            setOrderItems(orderList)
        }
    }

    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }

    const getBasketItemCount = () => {
        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount
    }

    const sumOrder = () => {
        let total = orderItems.reduce((a, b) => a + (b.total || 0), 0)
        
        return Number.parseFloat(total).toFixed(2)
    }

    const renderFoodInfo = () => {
        return (
            <View>
                {
                    restaurantMenuItem ? (
                        <>
                            {/* Image & Quantity */}
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ height: SIZES.height * 0.35 }} >
                                    
                                    {/* Image */}
                                    <Image
                                        source={restaurantMenuItem.photo}
                                        resizeMode="cover"
                                        style={{
                                            width: SIZES.width,
                                            height: "90%",
                                            backgroundColor: "#fff"
                                        }}
                                    />

                                    <Ionicons 
                                        name="arrow-back" 
                                        color={COLORS.white} 
                                        size={30} 
                                        style={{
                                            position: "absolute",
                                            top: 12,
                                            left: 15
                                        }}
                                        onPress={() => navigation.goBack()}
                                    />

                                    {/* Favourite */}
                                    { showAddToFav ? 
                                        <View style={{position: "absolute", top: 12, right: 15}} >
                                            <HeartButton 
                                                color={colors.pink}
                                                selectedColor={colors.pink}
                                                onPress={() => {}}
                                            />
                                        </View>
                                        : null 
                                    }

                                </View>                            

                                
                                
                                
                                {/* <View
                                    style={{                                    
                                        width: SIZES.width,
                                        height: 40,
                                        justifyContent: 'center',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 40,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopLeftRadius: 10,
                                            borderBottomLeftRadius: 10,
                                            shadowColor: '#666666',
                                            shadowOffset: {width: 4, height: 4},
                                            shadowOpacity: 0.9,
                                            shadowRadius: 2,
                                            elevation: 3,
                                        }}
                                        onPress={() => editOrder("-", restaurantMenuItem.menuId, restaurantMenuItem.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>-</Text>
                                    </TouchableOpacity>

                                    <View
                                        style={{
                                            width: 40,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            shadowColor: '#666666',
                                            shadowOffset: {width: 4, height: 4},
                                            shadowOpacity: 0.9,
                                            shadowRadius: 2,
                                            elevation: 2,
                                        }}
                                    >
                                        <Text style={{ ...FONTS.h2 }}>{getOrderQty(restaurantMenuItem.menuId)}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={{
                                            width: 40,
                                            backgroundColor: COLORS.white,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderTopRightRadius: 10,
                                            borderBottomRightRadius: 10,
                                            shadowColor: '#666666',
                                            shadowOffset: {width: 4, height: 4},
                                            shadowOpacity: 0.9,
                                            shadowRadius: 2,
                                            elevation: 3,
                                        }}
                                        onPress={() => editOrder("+", restaurantMenuItem.menuId, restaurantMenuItem.price)}
                                    >
                                        <Text style={{ ...FONTS.body1 }}>+</Text>
                                    </TouchableOpacity>
                                </View>  */}
                                
                                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

                            </View>
                            <View>
                                {/* Name & Description */}
                                <View
                                    style={{
                                        width: SIZES.width,
                                        flexDirection: "column",
                                        marginVertical: 10,
                                        paddingHorizontal: 20,
                                        paddingTop: 15
                                    }}
                                >
                                    <Text style={{ ...FONTS.h1 }}>
                                        {restaurantMenuItem.name}
                                    </Text>                           
                                    <Text style={{ ...FONTS.body3, marginTop: 12}} numberOfLines={5}>{restaurantMenuItem.description}</Text>
                                </View>

                                {/* Calories */}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginVertical: 10,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}
                                >
                                    <Image
                                        source={icons.fire}
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginRight: 10
                                        }}
                                    />

                                    <Text style={{
                                        ...FONTS.body3, color: COLORS.darygray
                                        }}>
                                        {Number.parseFloat(restaurantMenuItem.calories).toFixed(2)} cal
                                    </Text>                      
                                </View>
                            </View>

                            <View style={{ alignItems : "center" }}>
                                <View style={{ height: SIZES.height * 0.34, width: "100%", justifyContent: "flex-end", alignItems: "center" }}>
                                    <Pressable style={[styles.root ]} onPress={() => navigation.navigate("DupCart", { restaurantMenuItem, quantity })}>
                                        <Text style={styles.text}>Go to cart</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </>
                        ) : null                    
                }
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.container}>
            {renderFoodInfo()}
            {/* {renderOrder()} */}
        </SafeAreaView>
    )
}

export default Description;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    },
    root: {
        backgroundColor: '#e47911',
        marginVertical: 20,
        height: 40,
        width: "70%",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#a15e1b',
    },
    text: {
        fontSize: 20,
    },
})