import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, TextInputProps, ViewStyle, TextStyle } from 'react-native';

interface OTPInputProps {
  length?: number; // Number of OTP digits
  onChange?: (otp: string) => void; // Callback for OTP change
  containerStyle?: ViewStyle; // Custom style for the container
  inputStyle?: TextStyle; // Custom style for each input box
}

const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  onChange,
  containerStyle,
  inputStyle,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text.slice(-1); // Keep only the last entered character
    setOtp(newOtp);
    onChange?.(newOtp.join('')); // Trigger onChange callback with the updated OTP

    // Focus on the next input if text is entered
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: { nativeEvent: { key: string } }, index: number) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        // If current box has a value, clear it
        newOtp[index] = '';
      } else if (index > 0) {
        // If current box is empty, move to the previous box
        inputs.current[index - 1]?.focus();
        newOtp[index - 1] = ''; // Clear the previous box value
      }
      setOtp(newOtp);
      onChange?.(newOtp.join(''));
    }
  };

  const handleFocus = (index: number) => {
    // Select existing text for better user experience
    inputs.current[index]?.setNativeProps({ selection: { start: 0, end: 1 } });
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {otp.map((value, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={[styles.input, inputStyle]}
          value={value}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          keyboardType="numeric"
          maxLength={1}
          onFocus={() => handleFocus(index)}
          returnKeyType="next"
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 18,
    borderRadius: 5,
  },
});

export default OTPInput;
