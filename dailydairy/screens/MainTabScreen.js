import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Original Screens
// import HomeScreen from './HomeScreen';
// import DescriptionScreen from './DescriptionScreen';
// import NotificationScreen from './NotificationScreen';
import CalenderScreen from '../DDcomponents/CalenderScreen';
import StatisticsScreen from './StatisticsScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';

// Copy Screens
import HomeScreenCopy from './HomeScreenCopy';
import DescriptionScreenCopy from './DescriptionScreenCopy';
import NotificationScreenCopy from './NotificationScreenCopy';

import colors from '../DDstyles/colors';

const AppStack = createStackNavigator();
const AppCalenderStack = createStackNavigator();
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
        name="Calender"
        component={AppCalenderStackScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-month" color={color} size={26} />
          ),
        }}
      />      
      <AppTab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#fff',
          // tabBarIcon: ({ color }) => (
          //   <MaterialCommunityIcons name="calendar-month-outline" color={color} size={26} />
          // ),
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
      
      {/* <AppStack.Screen name="Home" component={HomeScreen} options={{ */}
      <AppStack.Screen name="Home" component={HomeScreenCopy} options={{
          headerLeft: () => (
            <Icon.Button name="menu" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.openDrawer()} ></Icon.Button>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <Icon.Button name="notifications" size={25} backgroundColor="#fff" color="#000" onPress={() => {navigation.navigate("Notifications")}}></Icon.Button>
              {/* <Icon.Button name="cart" size={25} backgroundColor="#fff" color="#000" onPress={() => {navigation.navigate("DupCart")}} ></Icon.Button> */}
            </TouchableOpacity>
          )
        }}
      />
      <AppStack.Screen name="Calender" component={CalenderScreen} />
      {/* <AppStack.Screen name="ProductsOverview" component={ProductsOverviewScreen} /> */}
      {/* <AppStack.Screen name="DupCart" component={CartDuplicate} options={{tabBarVisible: false}} />
      <AppStack.Screen name="FinalOrder" component={FinalOrderSummary} options={{tabBarVisible: false}} />
      <AppStack.Screen name="Login" component={Login} /> */}


      {/* <AppStack.Screen name="Notifications" component={NotificationScreen} />
      <AppStack.Screen name="Description" component={DescriptionScreen} options={{headerShown: false}} /> */}


      <AppStack.Screen name="Notifications" component={NotificationScreenCopy} />
      <AppStack.Screen name="Description" component={DescriptionScreenCopy} options={{headerShown: false}} />      
    </AppStack.Navigator>
  )
  
  const AppCalenderStackScreen = ({ navigation }) => (
    <AppCalenderStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#fff",
        elevation: 0
      },
      headerTintColor: "#fff",      
    }}>
      <AppCalenderStack.Screen name="Calender" component={CalenderScreen} options={{
        headerShown: false
        // title: '',
        // headerLeft: () => (
        //   <Icon.Button name="arrow-back-outline" size={25} color="#000" backgroundColor='#fff' onPress={() => navigation.goBack()} ></Icon.Button>
        // )
       }} 
      />
    </AppCalenderStack.Navigator>
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
      {/* <AppProfileStack.Screen name="Favorites" options={{ title: 'Favorites' }} component={FavoriteScreen} /> */}
      {/* <AppProfileStack.Screen name="FavDuplicateOne" options={{ title: 'FavDuplicateOne', headerShown: false }} component={FavDuplicateOne} /> */}
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