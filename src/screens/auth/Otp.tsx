import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageSourcePropType,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import colors from "../../constants/colors";
import { ScrollView } from "react-native-gesture-handler";
import Icons from "../../constants/icons";
import OTPInput from "../../components/OtpInput";
import { RootStackParamList } from "../../routes/StackNavigator";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type OtpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Otp"
>;

const Otp = () => {
  const [otp, setOtp] = useState('');
  const navigation = useNavigation<OtpScreenNavigationProp>();

  const handleOtpChange = (value: string) => {
    setOtp(value);
    console.log('OTP:', value);
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
      <StatusBar backgroundColor={colors.PrimaryWhite} />
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Image source={Icons.BackArrowIcon as ImageSourcePropType} style={styles.backArrow} />
      </TouchableOpacity>

      {/* Progress Indicator */}
      <View style={styles.progressIndicator}>
        <View style={styles.progressDotInactive} />
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotInactive} />
      </View>

      {/* Icon Placeholder */}
      <View style={styles.iconContainer}>
        <View style={styles.iconPlaceholder}>
          <Image style={{ width: '100%', height: '100%', alignSelf: 'center', resizeMode: 'contain' }}
            source={Icons.MailIcon as ImageSourcePropType} />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Enter OTP</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Enter the OTP code we just sent
        you on your registered Phone number
      </Text>

      {/* Otp Input */}
      <OTPInput
        length={6} // Number of OTP digits
        onChange={handleOtpChange} // Callback for OTP change
        containerStyle={styles.otpContainer} // Custom style for the container
        inputStyle={styles.otpInput} // Custom style for each input box
      />

      {/* Continue Button */}
      <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Reset Password</Text>
      </TouchableOpacity>
      <Text style={styles.signInText}>
        Didn't get Otp?{" "}
        <Text onPress={() => navigation.navigate("SignUp")} style={styles.linkText}>Resend Otp</Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: responsiveWidth(5),
  },
  backButton: {
    alignSelf: "flex-start",
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(2),
    width: responsiveWidth(8),
    height: responsiveHeight(4)
  },
  backArrow: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  progressIndicator: {
    flexDirection: "row",
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(4),
  },
  progressDotActive: {
    width: responsiveWidth(8),
    height: responsiveHeight(0.7),
    backgroundColor: "#407BFF",
    borderRadius: responsiveWidth(4),
    marginHorizontal: responsiveWidth(1),
  },
  progressDotInactive: {
    width: responsiveWidth(4),
    height: responsiveHeight(0.7),
    backgroundColor: "#E0E0E0",
    borderRadius: responsiveWidth(2),
    marginHorizontal: responsiveWidth(1),
  },
  iconContainer: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    backgroundColor: "#E6F0FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(5),
  },
  iconPlaceholder: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: "700",
    color: "#407BFF",
    marginBottom: responsiveHeight(3),
    textAlign: 'center'
  },
  subtitle: {
    fontSize: responsiveFontSize(1.8),
    textAlign: "center",
    color: "#6B6B6B",
    marginBottom: responsiveHeight(5),
  },
  input: {
    width: "100%",
    height: responsiveHeight(7),
    backgroundColor: "#F5F5F5",
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(4),
    fontSize: responsiveFontSize(2),
    color: "#000000",
    marginBottom: responsiveHeight(3),
  },
  continueButton: {
    width: "100%",
    height: responsiveHeight(7),
    backgroundColor: "#407BFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(2),
  },
  continueButtonText: {
    fontSize: responsiveFontSize(2.2),
    color: "#FFFFFF",
    fontWeight: "600",
  },
  otpContainer: {
    justifyContent: 'space-evenly',
    width: '100%',
    marginVertical: responsiveHeight(4)
  },
  otpInput: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderWidth: 1,
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    borderRadius: responsiveWidth(1),
    backgroundColor: '#F5F9FE'
  },
  otpText: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    color: '#555',
  },
  signInText: {
    textAlign: "center",
    marginTop: responsiveHeight(2),
    fontSize: responsiveWidth(3.5),
    color: "#666",
  },
  linkText: {
    color: "#5A67F2",
    textDecorationLine: "underline",
  },
});

export default Otp;
