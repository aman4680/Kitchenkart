import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import {
    Avatar,    
    Caption,
    Paragraph,
    Drawer,
    Text,
    Title,    
    TouchableRipple,
    Switch
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import colors from '../styles1/colors';

const listing5Photo = require('../data/photos/listing5.png');

// import { AuthContext } from '../../components/context';

import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';;
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    // const { signOut } = React.useContext(AuthContext);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    const handleLanguageChange = () => {

    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} >
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={listing5Photo} size={50} />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Hello Tony</Title>
                                <Caption style={styles.caption} >tony@gmail.com</Caption>
                                {/* <Title style={styles.title}>Hello User</Title>
                                <Caption style={styles.caption} >Pease login to view profile</Caption> */}
                            </View>
                        </View>                                            
                    </View>

                    <View style={styles.divider}></View>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.row}>                            
                            <View style={{ flexDirection: "row", justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Icons name="star-outline" color="#000" size={18} />
                                <Text style={{marginHorizontal: 15, fontSize: 16}}>Your Rating</Text>
                            </View>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <Text style={{color: colors.gray08, marginHorizontal: 4, fontSize: 16, paddingTop: 2}}>--</Text>
                                <Icons name="star-sharp" color={colors.gray08} size={12} style={{paddingVertical: 5}} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.infoBoxWrapper}>
                        {/* <TouchableOpacity onPress={() => {props.navigation.navigate('Bookmark')}} style={[styles.infoBox, { */}
                        <TouchableOpacity onPress={() => {props.navigation.navigate('FavDuplicateOne')}} style={[styles.infoBox, {
                            borderRightColor: '#dddddd',
                            borderRightWidth: 1
                        }]}>
                            <Icon 
                                name="heart-outline" 
                                color="#000"
                                size={20}
                            />                            
                            <Text>Favorites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {props.navigation.navigate('Settings')}} style={styles.infoBox}>
                            <Icons 
                                name="settings-outline" 
                                color="#000"
                                size={20}
                            />
                            <Text>Settings</Text>
                        </TouchableOpacity>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />                        
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="brightness-percent" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Deals and Offers"
                            onPress={() => {props.navigation.navigate('Offers')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icons
                                name="notifications" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Notifications"
                            onPress={() => {props.navigation.navigate('Notification')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Entypo 
                                name="info-with-circle" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="headset" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Contact Us"
                            onPress={() => {props.navigation.navigate('ContactUs')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={[styles.preference, {marginVertical: 3}]}>
                                <Text style={{fontSize: 16, paddingTop: 4}}>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>   
                            </View>
                        </TouchableRipple>
                        <TouchableRipple onPress={() => {handleLanguageChange()}}>
                            <View style={[styles.preference, {marginVertical: 5}]}>
                                <Text style={{fontSize: 16, paddingTop: 4}}>Language</Text>
                                <FontAwesome5Icon name="language" color="#000" size={30} />
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                    <Drawer.Section title="Review">
                        <TouchableOpacity onPress={() => alert('Button Pressed')}>
                            <View style={[styles.review, {marginVertical: 8}]}>
                                <Icons name="newspaper-outline" color="#000" size={20} />
                                <Text style={{fontSize: 16, paddingLeft: 20}}>Feedback</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => alert('Button Pressed')}>
                            <View style={[styles.review, {marginVertical: 12}]}>
                                <Icons name="star" color="#000" size={20} />
                                <Text style={{fontSize: 16, paddingLeft: 20}}>Rate us on the Play Store</Text>
                            </View>
                        </TouchableOpacity>  
                    </Drawer.Section>

                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={ styles.bottomDrawerSection } >
                <DrawerItem 
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Exit-App"
                    onPress={() => {}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    divider: {
      borderWidth: 0.1,
      borderStyle: 'solid',
      borderColor: colors.lightGray,
      borderBottomColor: "#dddddd",
      borderBottomWidth: 1,
      width: "100%",
      alignSelf: 'center',
      marginTop: 20
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    infoBoxWrapper: {
      borderBottomColor: '#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 70,
    },
    infoBox: {
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-between",
      paddingVertical: 12,
      paddingHorizontal: 16
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
    //   marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    //   marginVertical: 5
    },
    review: {
      flexDirection: 'row',
      paddingHorizontal: 16,
    //   marginVertical: 5
    },
  });