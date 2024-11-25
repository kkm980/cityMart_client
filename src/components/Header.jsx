import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import icons from '../constants/icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

export default function Header({ backgroundColor }) {
    const navigation = useNavigation();
    return (
        <LinearGradient colors={backgroundColor ? [backgroundColor, backgroundColor, backgroundColor] : ['#ffffff', '#ffffff', '#ffffff']} style={styles.headerContainer}>
            {/* Left Logo Section */}
            <View style={styles.logoContainer}>
                <Image
                    source={icons.HeaderLeftLogo} // Replace with your logo path
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Text style={styles.logoText}>CITYMART</Text>
            </View>

            {/* Right Icon Section */}
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Image
                        source={icons.NotificationIcon} // Replace with your notification icon path
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={styles.iconButton}>
                    <Image
                        source={icons.HeaderBarIcon} // Replace with your menu icon path
                        style={styles.icon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: responsiveHeight(10), // Adjust height as needed
        paddingHorizontal: responsiveWidth(5), // Responsive padding
        backgroundColor: '#fff', // Background color
        borderBottomWidth: 1,
        borderBottomColor: '#ddd', // Optional: Add border for separation
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: responsiveWidth(8), // Adjust logo size
        height: responsiveHeight(4),
        marginRight: responsiveWidth(2),
    },
    logoText: {
        fontSize: responsiveHeight(2.5), // Adjust text size for responsiveness
        fontWeight: 'bold',
        color: '#1C1C1C', // Match text color to design
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: responsiveWidth(4), // Space between icons
    },
    icon: {
        width: responsiveWidth(6), // Adjust icon size
        height: responsiveHeight(3),
    },
});
