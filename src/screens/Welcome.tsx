import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../constants/icons';

const Welcome = () => {
    return (
        <View style={styles.container}>
            {/* Image Section */}
            <Image
                source={Icons.DeliveryIcon as ImageSourcePropType}
                style={styles.image}
            />

            {/* Text Section */}
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>The Simple Way to</Text>
                <Text style={styles.subtitleText}>find the best! 👌</Text>
                <Text style={styles.descriptionText}>
                    CtyMart brings everything to your home 🛵
                </Text>
            </View>

            {/* Next Button */}
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2D43', // Dark blue background
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(5),
    },
    image: {
        width: responsiveWidth(50), // 50% of screen width
        height: responsiveHeight(30), // 30% of screen height
        resizeMode: 'contain',
        marginBottom: responsiveHeight(5),
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: responsiveHeight(8),
    },
    titleText: {
        fontSize: responsiveFontSize(3),
        fontWeight: '600',
        color: '#FFFFFF', // White color
        marginBottom: responsiveHeight(1),
    },
    subtitleText: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: '400',
        color: '#FFFFFF',
        marginBottom: responsiveHeight(2),
    },
    descriptionText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    nextButton: {
        width: responsiveWidth(30), // 30% of screen width
        height: responsiveHeight(6), // 6% of screen height
        backgroundColor: '#FFFFFF', // White button
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButtonText: {
        fontSize: responsiveFontSize(2),
        fontWeight: '600',
        color: '#2A2D43', // Dark blue text
    },
});

export default Welcome;
