import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import ProductsList from './ProductsList'

import { SIZES, COLORS, FONTS } from '../data/constants';

const RenderProducts = ({ data }) => {

    // return (
    //     <View>
    //         <FlatList
    //             data={data}
    //             renderItem={({ item }) => {
    //                 return <ProductsList item={item} />
    //             }}
    //             // keyExtractor={ item => item.id }
    //             keyExtractor={(item, index) => 'key' + index}
                
    //             // onScroll={Animated.event(
    //             //     [{ nativeEvent: { contentOffset: { x: scrollX } } }]
    //             // )}
    //         />
    //     </View>
    // )

    return data.map( (item, index) => (
            <View style={styles.cardsWrapper} key={item.id}>
                <TouchableOpacity
                    style={{ marginBottom: SIZES.padding-10 }}
                    onPress={() => navigation.navigate("Description", {                    
                        item,
                        currentLocation
                    })}
                >
                    <View style={styles.card}>
                      {/* Image */}
                        <View style={styles.cardImgWrapper}>                
                            <Image
                                source={item.photo}
                                resizeMode="cover"
                                style={styles.cardImg}
                            />
                        </View> 

                      {/* Restaurant Info */}
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>{item.title} - {item.containerType}</Text>
                            <Text style={styles.cardDetails}>Fat: {item.fatLevel}</Text>
                            <View style={{flexDirection: "row", width: 60}}>
                                <Text style={styles.cardDetails}>Rs. </Text>
                                <Text style={[styles.cardDetails, {fontSize: 16, fontWeight: "bold"}]}>{item.price}{item.pricePerQuantityType}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        ))
}

export default RenderProducts

const styles = StyleSheet.create({
    cardsWrapper: {
        width: '98%',
        alignSelf: 'center',
        },
    card: {
        height: 130,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,    
    },
    cardImg: {
        height: '100%',
        width: 130,
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    cardInfo: {  
        flex: 2,  
        paddingLeft: 20,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: "column",
        justifyContent: "space-around",
        borderColor: '#ccc',
        borderWidth: 1,
        // borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontSize: 18,
    },
    cardDetails: {
        fontSize: 14,
        color: '#444',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
})