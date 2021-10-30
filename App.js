import 'react-native-gesture-handler';

import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { DrawerContent } from './src/screens/DrawerContent';

import MainTabScreen from './src/screens/MainTabScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import AboutScreen from './src/screens/AboutScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import OffersScreen from './src/screens/OffersScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import FavDuplicateOne from './src/screens/DuplicateScreens/FavDuplicateOne';

const AppDrawer = createDrawerNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  })

  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" color="#000"/>
      </View>
    )
  }
  return (  
      <NavigationContainer>
        <AppDrawer.Navigator drawerContent = { props => <DrawerContent {...props} /> } >
          <AppDrawer.Screen name="LoginDrawer" component={MainTabScreen} />
          <AppDrawer.Screen name="Bookmark" component={BookmarkScreen} />
          <AppDrawer.Screen name="FavDuplicateOne" component={FavDuplicateOne} />
          <AppDrawer.Screen name="Settings" component={SettingsScreen} />
          <AppDrawer.Screen name="Offers" component={OffersScreen} />
          <AppDrawer.Screen name="Notification" component={NotificationScreen} />
          <AppDrawer.Screen name="About" component={AboutScreen} />
        </AppDrawer.Navigator>      
      </NavigationContainer>
  );
}

export default App;



// import React from 'react';
// import Providers from './FirebaseProject/navigation';

// const App = () => {
//   return <Providers />;
// }

// export default App;