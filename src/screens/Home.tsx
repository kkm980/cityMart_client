import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import colors from '../constants/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const Home = () => {
    return (
        <View>
            <Header backgroundColor={colors.PrimaryGreen} />
         
        </View>
    )
}


export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsiveWidth(4),
        backgroundColor: '#F5F5F5',
    },
});