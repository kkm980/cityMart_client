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
import CheckBox from '@react-native-community/checkbox';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Icons from "../../constants/icons";
import colors from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/StackNavigator";

type SignUpScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "SignUp"
>;

const SignUp = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const navigation = useNavigation<SignUpScreenNavigationProp>();

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={colors.PrimaryWhite} />
            {/* Placeholder for the Icon */}
            <View style={styles.iconPlaceholder}>
                <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                    source={Icons.WaveIcon as ImageSourcePropType} />
            </View>

            {/* Title */}
            <Text style={styles.title}>Sign Up</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
                Let us know each other and we will take care of all your daily needs. Reaching mart to your door.
            </Text>

            {/* Separator */}
            <Text style={styles.separator}>Or</Text>

            {/* Input Fields */}
            <TextInput placeholder="Name" style={styles.input} />
            <TextInput placeholder="Phone Number" style={styles.input} />
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

            {/* Terms and Conditions */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    style={styles.checkbox}
                />
                <Text style={styles.termsText}>
                    I agree to The{" "}
                    <Text style={styles.linkText}>Terms of Service</Text> and{" "}
                    <Text style={styles.linkText}>Privacy Policy</Text>
                </Text>
            </View>

            {/* Create Account Button */}
            <TouchableOpacity style={styles.createAccountButton}>
                <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>

            {/* Sign In */}
            <Text style={styles.signInText}>
                Do you have an account?{" "}
                <Text onPress={() => navigation.navigate("SignIn")} style={styles.linkText}>Sign In</Text>
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
    iconPlaceholder: {
        height: responsiveHeight(12),
        width: responsiveWidth(22),
        borderRadius: responsiveWidth(10),
        backgroundColor: "#E6F0FF",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: responsiveHeight(8),
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
        marginBottom: responsiveHeight(2),
        paddingRight: responsiveWidth(2),
        height: responsiveHeight(6)
    },
    passwordToggle: {
        fontSize: responsiveWidth(5),
        color: "#333",
    },
    checkboxContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: responsiveHeight(3),
    },
    checkbox: {
        marginRight: responsiveWidth(2),
    },
    termsText: {
        fontSize: responsiveWidth(3.5),
        color: "#666",
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

export default SignUp;
