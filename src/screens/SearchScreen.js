import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchScreen = () => {

    const [search, setSearch] = useState("");

    const updateSearch = (text) => {
      if (text) {
        setSearch(text);
      }
      else{
        setSearch(text);
      }
    };

    const searchBarRef = useRef();

    useEffect(() => {
        searchBarRef.current.focus();
    }, []);

    return (
        <ScrollView style={styles.scrollView}>
            <SearchBar
                ref={searchBarRef}
                placeholder="Search Restaurants or recipies..."
                lightTheme={true}
                clearIcon={<Ionicons name='close' color="#000" size={25} />}
                searchIcon={<Ionicons name="search" color="#000" size={26} />}
                round={true}                
                onChangeText={(text) => updateSearch(text)}
                value={search}
                onClear={(text) => updateSearch('')}
                containerStyle={{backgroundColor: "#fff"}}
                inputContainerStyle={{backgroundColor: "#fff"}}
                rightIconContainerStyle={{backgroundColor: "#fff"}}
                showLoading={true}
                // focus
                // clear
            />        
        </ScrollView>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  scrollview: {
    height: "100%"
  },
});