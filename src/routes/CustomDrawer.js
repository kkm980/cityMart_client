import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContainer}>
      <SafeAreaView style={styles.safeArea}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeIcon}>×</Text>
        </TouchableOpacity>

        {/* Menu Items */}
        <View style={styles.menuItemsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Shop')} style={styles.menuItem}>
            {/* <Image
              source={require('../assets/icons/shop.png')}
              style={styles.menuIcon}
            /> */}
            <Text style={styles.menuText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Community')} style={styles.menuItem}>
            {/* <Image
              source={require('../assets/icons/community.png')}
              style={styles.menuIcon}
            /> */}
            <Text style={styles.menuText}>Community</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('MyAccount')} style={styles.menuItem}>
            {/* <Image
              source={require('../assets/icons/account.png')}
              style={styles.menuIcon}
            /> */}
            <Text style={styles.menuText}>My Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('TrackOrder')} style={styles.menuItem}>
            {/* <Image
              source={require('../assets/icons/track-order.png')}
              style={styles.menuIcon}
            /> */}
            <Text style={styles.menuText}>Track Order</Text>
          </TouchableOpacity>
        </View>

        {/* Email Section */}
        <View style={styles.emailSection}>
          <Text style={styles.emailLabel}>Get The Dirt.</Text>
          <TextInput
            placeholder="Enter your Email"
            style={styles.emailInput}
            placeholderTextColor="#FFFFFF"
          />
        </View>

        {/* Footer Links */}
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('FAQ')} style={styles.footerLink}>
            <Text style={styles.footerText}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AboutUs')} style={styles.footerLink}>
            <Text style={styles.footerText}>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={styles.footerLink}>
            <Text style={styles.footerText}>CONTACT US</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#1E9650', // Green background
  },
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: responsiveHeight(2),
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: responsiveWidth(4),
  },
  closeIcon: {
    fontSize: responsiveFontSize(3),
    color: '#FFFFFF',
  },
  menuItemsContainer: {
    marginTop: responsiveHeight(2),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(6),
  },
  menuIcon: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
    marginRight: responsiveWidth(4),
    tintColor: '#FFFFFF', // White icon color
  },
  menuText: {
    fontSize: responsiveFontSize(2),
    color: '#FFFFFF',
    fontWeight: '600',
  },
  emailSection: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  emailLabel: {
    fontSize: responsiveFontSize(2.2),
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: responsiveHeight(1),
  },
  emailInput: {
    width: responsiveWidth(80),
    height: responsiveHeight(5),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(4),
    color: '#FFFFFF',
  },
  footerContainer: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  footerLink: {
    marginVertical: responsiveHeight(1),
  },
  footerText: {
    fontSize: responsiveFontSize(1.8),
    color: '#FFFFFF',
  },
});

export default CustomDrawer;
