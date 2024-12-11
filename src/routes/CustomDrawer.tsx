import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import Icons from '../constants/icons';
import fonts from '../constants/fonts';
import colors from '../constants/colors';

// Define navigation type
type NavigationType = {
  navigate: (screen: string) => void;
};

const CustomDrawer: React.FC<DrawerContentComponentProps> = (props) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}>
      <Image style={{
        width: responsiveWidth(40),
        height: responsiveHeight(40),
        resizeMode: 'contain',
        position: 'absolute',
        top: responsiveHeight(-7),
        left: 0
      }}
        source={Icons.DrawerTopImage as ImageSourcePropType} />
      <Image style={{
        width: responsiveWidth(45),
        height: responsiveHeight(45),
        resizeMode: 'contain',
        position: 'absolute',
        top: responsiveWidth(35),
        right: responsiveWidth(-4)
      }}
        source={Icons.DrawerMiddleImage as ImageSourcePropType} />
      <Image style={{
        width: responsiveWidth(35),
        height: responsiveHeight(35),
        resizeMode: 'contain',
        position: 'absolute',
        bottom: -50,
        right: -10
      }}
        source={Icons.DrawerBottomImage as ImageSourcePropType} />

      <SafeAreaView style={styles.safeArea}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton} onPress={() => props.navigation.closeDrawer()}>
          <Image style={{
            width: responsiveWidth(5),
            height: responsiveHeight(5),
            resizeMode: 'contain'
          }}
            source={Icons.CrossIcon as ImageSourcePropType} />
        </TouchableOpacity>


        {/* Menu Items */}
        <View>
          {[
            { label: 'Shop', screen: 'Shop', image: Icons.ShopIcon },
            { label: 'Community', screen: 'Community', image: Icons.CommunityIcon },
            { label: 'My Account', screen: 'MyAccount', image: Icons.MyAccountIcon },
            { label: 'Track Order', screen: 'TrackOrder', image: Icons.TrackOrderIcon },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(item.screen)}
              style={[styles.menuItem, { marginBottom: item.label == "Shop" ? responsiveHeight(6) : 0 }]}>
              <Image
                source={item.image as ImageSourcePropType}
                style={styles.menuIcon}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
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
          {['FAQ', 'About Us', 'Contact Us'].map((label, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate(label.replace(' ', ''))}
              style={styles.footerLink}>
              <Text style={styles.footerText}>{label.toUpperCase()}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

// Define styles
const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#1E9650', // Green background
  },
  safeArea: {
    flex: 1,
    // justifyContent: 'space-between',
    paddingBottom: responsiveHeight(2),
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: responsiveWidth(4),
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(20),
  },
  menuIcon: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    marginRight: responsiveWidth(6),
  },
  menuText: {
    fontSize: responsiveFontSize(2.8),
    color: colors.PrimaryWhite,
    fontWeight: 'bold',
    fontFamily: fonts.POPPINS_EXTRA_BOLD
  },
  emailSection: {
    marginTop: responsiveHeight(4),
    alignItems: 'center',
  },
  emailLabel: {
    fontSize: responsiveFontSize(2.2),
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: fonts.POPPINS_BOLD,
    marginBottom: responsiveHeight(2),
  },
  emailInput: {
    width: responsiveWidth(80),
    height: responsiveHeight(7),
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(4),
    color: colors.PrimaryWhite,
    textAlign: 'center',
    fontSize: responsiveFontSize(2)
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
    color: colors.PrimaryWhite,
    fontFamily: fonts.POPPINS_BOLD
  },
});

export default CustomDrawer;
