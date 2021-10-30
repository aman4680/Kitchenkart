import React from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Text, TouchableRipple } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Share from 'react-native-share';
import files from '../../assets/filebase64';

const listing5Photo = require('../data/photos/listing5.png');

const ProfileScreen = ({ navigation }) => {

  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal via Kitchenkart App. I\'ve already ordered more than 10 meals on it.',
      url: files.image1
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
              <View style={{flexDirection: 'row', marginTop: 15}}>
                <Avatar.Image source={listing5Photo} size={80} />
                <View style={{marginLeft: 20}}>
                  <Title style={[styles.title, { marginTop:15, marginBottom: 5 }]}>Hello Tony</Title>
                  <Caption style={styles.caption}></Caption>
                </View>
              </View>
            </View>


            <View style={styles.rowFollow}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.captionFollow]}>80</Paragraph>
                <Caption style={styles.captionFollow}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.captionFollow]}>100</Paragraph>
                <Caption style={styles.captionFollow}>Followers</Caption>
              </View>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.row}>
                <Icon name="map-marker-radius" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
              </View>
              <View style={styles.row}>
                <Icon name="phone" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>12121212</Text>
              </View>
              <View style={styles.row}>
                <Icon name="email" color="#777777" size={20}/>
                <Text style={{color:"#777777", marginLeft: 20}}>tony@email.com</Text>
              </View>
            </View>            
 
            <View style={styles.infoBoxWrapper}>
              <View style={[styles.infoBox, {
                borderRightColor: '#dddddd',
                borderRightWidth: 1
              }]}>
                <Title>₹140.50</Title>
                <Caption>Wallet</Caption>
              </View>
              <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Orders</Caption>
              </View>
            </View>


          <View style={[{flex: 1, justifyContent: "center"}, styles.menuWrapper]}>
            {/* <TouchableRipple onPress={() => {navigation.navigate("Favorites")}}> */}
            <TouchableRipple onPress={() => {navigation.navigate("FavDuplicateOne")}}>
              <View style={styles.menuItem}>
                <Icon name="heart-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Your Favorites</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
              <View style={styles.menuItem}>
                <Icon name="credit-card" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Payment</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={myCustomShare}>
              <View style={styles.menuItem}>
                <Icon name="share-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {navigation.navigate("Support")}}>
              <View style={styles.menuItem}>
                <Icon name="account-check-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Support</Text>
              </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {navigation.navigate("Settings")}}>
              <View style={styles.menuItem}>
                <Icons name="settings-outline" color="#FF6347" size={25}/>
                <Text style={styles.menuItemText}>Settings</Text>
              </View>
            </TouchableRipple>           
          </View>

        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    paddingHorizontal: 30,
    marginBottom: 20
  },
  userInfoSection: {
    paddingHorizontal: 30,    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  captionFollow: {
    fontSize: 16,
    lineHeight: 20,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  rowFollow: {
    marginVertical: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});