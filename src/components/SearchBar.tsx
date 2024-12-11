import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps, Image, ImageSourcePropType, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icons from '../constants/icons'; // Ensure you have this icons file in place

// Define prop types
interface SearchBarProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: ViewStyle; // Allow overriding container styles
  inputStyle?: TextStyle; // Allow overriding input styles
  iconStyle?: ImageStyle; // Allow overriding icon styles
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search',
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor="#A0A0A0"
        {...props}
      />
      <Image
        source={Icons.SearchIcon as ImageSourcePropType}
        style={[styles.icon, iconStyle]}
      />
    </View>
  );
};

// Define default styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#1A2E40',
    borderRadius: responsiveHeight(2), // Rounded corners
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    paddingHorizontal: responsiveWidth(4),
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontSize: responsiveFontSize(2),
    color: '#1A2E40',
  },
  icon: {
    width: responsiveHeight(3),
    height: responsiveHeight(3),
    tintColor: '#1A2E40',
  },
});

export default SearchBar;
