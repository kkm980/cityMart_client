import { Image, ImageSourcePropType, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import colors from '../constants/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import Svg, { Path } from 'react-native-svg';
import Icons from '../constants/icons'

const Home = () => {

    const Card = () => {
        return (
            <View style={styles.card}>
                {/* Background Curves */}
                <Svg
                    height="100%"
                    width="100%"
                    style={styles.svg}
                    viewBox="0 0 200 100"
                >
                    {/* Curved Lines */}
                    <Path
                        d="M0 30 C50 20, 150 50, 200 30" // Curve 1
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <Path
                        d="M0 50 C50 40, 150 70, 200 50" // Curve 2
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        fill="none"
                    />
                    <Path
                        d="M0 70 C50 60, 150 90, 200 70" // Curve 3
                        stroke="#FFFFFF"
                        strokeWidth="1.5"
                        fill="none"
                    />
                </Svg>

                {/* Text Content */}
                <View style={{ display: 'flex', flexDirection: 'row' }} >
                    <View>
                        <Text style={styles.title}>Food</Text>
                        <Text style={styles.amount}>$400</Text>
                    </View>
                    <View style={{ width: responsiveWidth(25), height: responsiveWidth(25), }} >
                        <Image style={{ width: '100%', height: "100%", resizeMode: 'contain' }}
                            source={Icons.Peperomia_Obtusfolia as ImageSourcePropType} />
                    </View>
                </View>
            </View>
        );
    };


    return (
        <ScrollView style={styles.container} >
            <StatusBar backgroundColor={colors.DarkBg} />
            <Header backgroundColor={colors.PrimaryWhite} />
            {Array(4).fill(null).map((_, index) => (
                <View style={styles.row} key={index}>
                    <Card />
                    <Card />
                </View>
            ))}
        </ScrollView>
    )
}


export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    card: {
        width: responsiveWidth(40), // Fixed width for the card
        height: responsiveHeight(15), // Fixed height for the card
        backgroundColor: '#AEE7D1', // Light green background
        borderRadius: responsiveWidth(4), // Rounded corners
        padding: responsiveWidth(2),
        position: 'relative',
        overflow: 'hidden', // Ensures curves don't overflow the card
    },
    svg: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: '600',
        color: '#2A2D43', // Dark text color
    },
    amount: {
        fontSize: responsiveFontSize(2.6),
        fontWeight: 'bold',
        color: '#2A2D43', // Dark text color
        marginTop: responsiveHeight(1.2),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20, // Add spacing between rows
    },
});