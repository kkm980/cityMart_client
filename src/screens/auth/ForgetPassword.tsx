import React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes/StackNavigator";

type ForgetPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ForgetPassword"
>;


const ForgetPassword = () => {

  const navigation = useNavigation<ForgetPasswordScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
      <StatusBar backgroundColor={colors.PrimaryWhite} />
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton}>
        <Image source={Icons.BackArrowIcon as ImageSourcePropType} style={styles.backArrow} />
      </TouchableOpacity>

      {/* Progress Indicator */}
      <View style={styles.progressIndicator}>
        <View style={styles.progressDotActive} />
        <View style={styles.progressDotInactive} />
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
      <Text style={styles.title}>Forget Password</Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum.
      </Text>

      {/* Mobile Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#B0B0B0"
      />

      {/* Continue Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Otp")} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
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
});

export default ForgetPassword;
