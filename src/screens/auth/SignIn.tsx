import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageSourcePropType,
    StatusBar,
} from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icons from "../../constants/icons";
import colors from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/StackNavigator";

type SignInScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "SignIn"
>;

const SignIn = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const navigation = useNavigation<SignInScreenNavigationProp>();

    return (
        <ScrollView style={styles.container}>
            {/* Placeholder for the Icon */}
            <StatusBar backgroundColor={colors.PrimaryWhite} />
            <Image style={{ width: responsiveWidth(60), height: responsiveHeight(30), alignSelf: 'center', resizeMode: 'contain', marginBottom: responsiveHeight(-16), marginTop: responsiveHeight(5) }}
                source={Icons.LoginScreenIcon as ImageSourcePropType} />

            {/* Title */}
            <Text style={styles.title}>Sign In</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                It was popularised in the 1960s with the release of Letraset sheetscontaining Lorem Ipsum.
            </Text>

            {/* Separator */}
            <Text style={styles.separator}>Or</Text>

            {/* Input Fields */}
            <TextInput placeholder="Phone Number/ Email" style={styles.input} />
            <View style={styles.passwordInputContainer}>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={!isPasswordVisible}
                    style={[styles.input, { flex: 1, marginBottom: 0 }]}
                />
                <TouchableOpacity onPress={() => setPasswordVisibility(!isPasswordVisible)}>
                    <Text style={styles.passwordToggle}>{isPasswordVisible ? "🙈" : "👁️"}</Text>
                </TouchableOpacity>
            </View>

            <Text onPress={() => navigation.navigate('ForgetPassword')} style={styles.forgetPasswordText} >Forget Password?</Text>

            {/* Create Account Button */}
            <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.createAccountText}>Login</Text>
            </TouchableOpacity>

            {/* Sign In */}
            <Text style={styles.signInText}>
                Don't have an account?{" "}
                <Text onPress={() => navigation.navigate("SignUp")} style={styles.linkText}>Sign Up</Text>
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsiveWidth(5),
        backgroundColor: "#fff",
    },
    iconText: {
        fontSize: responsiveWidth(5),
        color: "#5A67F2",
    },
    title: {
        fontSize: responsiveWidth(8),
        fontWeight: "bold",
        textAlign: "center",
        marginTop: responsiveHeight(2),
        color: colors.PrimaryTextBlue,
    },
    subtitle: {
        fontSize: responsiveWidth(4),
        textAlign: "center",
        marginVertical: responsiveHeight(2),
        color: "#666",
    },
    separator: {
        textAlign: "center",
        marginVertical: responsiveHeight(1),
        color: "#AAA",
    },
    input: {
        height: responsiveHeight(6),
        borderColor: "#E6E6E6",
        borderRadius: responsiveWidth(2),
        paddingHorizontal: responsiveWidth(3),
        marginBottom: responsiveHeight(2),
        backgroundColor: "#F9FAFB",
    },
    passwordInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#E6E6E6",
        borderRadius: responsiveWidth(2),
        backgroundColor: "#F9FAFB",
        marginBottom: responsiveHeight(1),
        paddingRight: responsiveWidth(2),
        height: responsiveHeight(6)
    },
    passwordToggle: {
        fontSize: responsiveWidth(5),
        color: "#333",
    },
    forgetPasswordText: {
        textAlign: 'right',
        marginBottom: responsiveHeight(10),
        color: '#707E91',
        fontSize: responsiveFontSize(1.5)
    },
    linkText: {
        color: "#5A67F2",
        textDecorationLine: "underline",
    },
    createAccountButton: {
        backgroundColor: colors.PrimaryButtonBlue,
        paddingVertical: responsiveHeight(1.5),
        borderRadius: responsiveWidth(2),
        justifyContent: "center",
        alignItems: "center",
    },
    createAccountText: {
        fontSize: responsiveWidth(4.5),
        color: "#FFF",
        fontWeight: "bold",
    },
    signInText: {
        textAlign: "center",
        marginTop: responsiveHeight(2),
        fontSize: responsiveWidth(3.5),
        color: "#666",
    },
});

export default SignIn;
