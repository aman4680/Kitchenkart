import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import CartScreen from './CartScreen';
import NotificationScreen from './NotificationScreen';
import FavoriteScreen from './FavoriteScreen';
import BookmarkScreen from './BookmarkScreen';
import FavDuplicateOne from './DuplicateScreens/FavDuplicateOne';
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';
import Description from './Description';
import SignUpScreen from './SignUpScreen';
import CartDuplicate from './DuplicateScreens/CartDuplicate';
import FinalOrderSummary from './DuplicateScreens/FinalOrderSummary';
// import ProductsOverviewScreen from './ProductsOverviewScreen';

import CreatingList from './CreatingList';

import colors from '../styles1/colors';

const AppStack = createStackNavigator();
const AppSearchStack = createStackNavigator();
const AppProfileStack = createStackNavigator();

const AppTab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <AppTab.Navigator
      initialRouteName="Home"
      activeColor="#404040"
      inactiveColor="#d9d9d9"
      // tabBarLabel="#009387"
    >
      <AppTab.Screen
        name="Home"
        component={AppStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <AppTab.Screen
        name="Search"
        component={AppSearchStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
      />      
      <AppTab.Screen
        name="Bookmark"
        // component={BookmarkScreen}
        component={FavDuplicateOne}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
          ),
        }}
      />
      <AppTab.Screen
        name="Profile"
        component={AppProfileStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon name="person" color={color} size={26} />
          ),
        }}
      />
    </AppTab.Navigator>
)

export default MainTabScreen;

const AppStackScreen = ({ navigation }) => (
    <AppStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#000",
      title: ""      
    }}>
      {/* <AppStack.Screen name="Splash" component={SplashScreen} />
      <AppStack.Screen name="OnBoarding" component={OnBoarding} /> */}
      <AppStack.Screen name="Home" component={HomeScreen} options={{
          headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.openDrawer()} ></Icon.Button>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Icon.Button name="notifications" size={25} backgroundColor="#fff" color="#000" onPress={() => {navigation.navigate("Notifications")}}></Icon.Button>
              <Icon.Button name="cart" size={25} backgroundColor="#fff" color="#000" onPress={() => {navigation.navigate("DupCart")}} ></Icon.Button>
            </TouchableOpacity>
          )
        }}
      />
      {/* <AppStack.Screen name="Cart" component={CartScreen} /> */}
      {/* <AppStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} /> */}
      <AppStack.Screen name="DupCart" component={CartDuplicate} options={{tabBarVisible: false}} />
      <AppStack.Screen name="FinalOrder" component={FinalOrderSummary} options={{tabBarVisible: false}} />
      <AppStack.Screen name="Login" component={Login} />
      <AppStack.Screen name="Notifications" component={NotificationScreen} />
      <AppStack.Screen name="Description" component={Description} options={{headerShown: false}} />      
    </AppStack.Navigator>
  )
  
  const AppSearchStackScreen = ({ navigation }) => (
    <AppSearchStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        elevation: 0
      },
      headerTintColor: "#fff",      
    }}>
      <AppSearchStack.Screen name="Search" component={SearchScreen} options={{
        headerShown: false
        // title: '',
        // headerLeft: () => (
        //   <Icon.Button name="arrow-back-outline" size={25} color="#000" backgroundColor='#fff' onPress={() => navigation.goBack()} ></Icon.Button>
        // )
       }} 
      />
    </AppSearchStack.Navigator>
  )

  const AppProfileStackScreen = ({ navigation }) => (
    <AppProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",       
        elevation: 0
      },
      headerTintColor: "#000",      
    }}>
      <AppProfileStack.Screen name="Profile" component={ProfileScreen} options={{
          title: '',
          headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.openDrawer()} />
          ),
          headerRight: () => (
            <TouchableOpacity>         
              <MaterialCommunityIcons.Button name="account-edit" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.navigate('EditProfile')} ></MaterialCommunityIcons.Button>
            </TouchableOpacity>
          )
        }}
      />
      <AppProfileStack.Screen name="EditProfile" options={{ title: 'Edit Profile' }} component={ EditProfileScreen } />
      <AppProfileStack.Screen name="Favorites" options={{ title: 'Favorites' }} component={FavoriteScreen} />
      <AppProfileStack.Screen name="FavDuplicateOne" options={{ title: 'FavDuplicateOne', headerShown: false }} component={FavDuplicateOne} />
    </AppProfileStack.Navigator>
  )

  const styles = StyleSheet.create({
    closeButton: {
      position: 'absolute',
      left: 20,
      zIndex: 9999,
    },
    headerStyle: {
      backgroundColor: colors.white,
      borderBottomWidth: 0,
    },
  });