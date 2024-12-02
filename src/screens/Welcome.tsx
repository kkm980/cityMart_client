import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, StatusBar } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Icons from '../constants/icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/StackNavigator';
import colors from '../constants/colors';


type WelcomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Welcome"
>;

const Welcome = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.DarkBg} />
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
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: responsiveWidth(45), alignSelf: 'flex-end', marginRight: responsiveWidth(5) }}>
                <View style={{ borderWidth: 1, borderColor: "#5D81FD", width: responsiveWidth(10), height: 0 }} />
                <View>
                    <Text onPress={() => navigation.navigate("SignIn")} style={styles.nextButtonText}>Next</Text>
                </View>
            </View>
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
        width: responsiveWidth(60), // 50% of screen width
        height: responsiveHeight(40), // 30% of screen height
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
        fontSize: responsiveFontSize(2.5),
        fontWeight: '400',
        textAlign: 'center',
        color: '#FFFFFF',
    },
    nextButtonText: {
        fontSize: responsiveFontSize(2),
        color: '#FFFFFF',
    },
});

export default Welcome;
