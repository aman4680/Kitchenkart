import React, { Component } from 'react';
import { Text, Thumbnail, View } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';

const FavouritesList = (props) => {

    const renderEmptyContainer = () => {
        return <View style={styles.emptyList} ><Text>The list is empty</Text></View>
    }

    const renderRow = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', margin: 1 }}>
                <Text>{item.title}</Text>
            </View >
        )
    }


    return (
        <View style={styles.MainContainer} >
            <FlatList
                data={props.favourites}
                renderItem={renderRow}
                keyExtractor={(i) => i.id}
                numColumns={1}
                ListEmptyComponent={renderEmptyContainer()}

            />
        </View>
    );
}

export default FavoritesTab;

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
    },

    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 600,
        borderRadius: 0
    },
    emptyList: {
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center'
    }
});