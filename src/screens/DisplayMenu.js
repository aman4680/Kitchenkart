import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated,
    ScrollView,
    FlatList
} from "react-native";
import { isIphoneX } from 'react-native-iphone-x-helper'

import { icons, COLORS, SIZES, FONTS } from '../constants'

const DisplayMenu = (props) => {

    // const [restaurantMenu, setRestaurantMenu] = useState(null)

    // useEffect(() => {
    //     let tempRestaurantMenu = restaurants[restaurantId].menu;
    //     setRestaurantMenu(tempRestaurantMenu);
    // })

    const renderRestaurantMenu = () => {
        
        const { menu, 
                // showAddToFav 
                } = props;

        const renderMenuItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Description", {
                    // item,
                    item
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                </View>
    
                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
    
                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    {/* <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    /> */}
                    {/* <Text style={{ ...FONTS.body3 }}>{item.rating}</Text> */}
    
                    {/* Categories */}
                    {/* <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        } */}
    
                        {/* Price */}
                        {/* {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >$</Text>
                            ))
                        } */}
                    {/* </View> */}
                    <Text>{item.calories}</Text>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        )
    
        return (
            <FlatList
                data={menu}
                keyExtractor={item => `menu${item.menuId}`}
                renderItem={renderMenuItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }
    
    return (
        <ScrollView style={styles.container}>
            {renderRestaurantMenu()}
        </ScrollView>
        // <View>
        //     <Text>{restaurantId}</Text>
        // </View>
    )
}

export default DisplayMenu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})



