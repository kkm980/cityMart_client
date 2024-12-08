import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../constants/colors';

const Profile: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    contactNumber: '',
    email: '',
    pincode: '',
    address: '',
    location: '',
  });

  // Handle Input Changes
  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  // Request Location Permission
  const requestLocationPermission = async () => {
    try {
      const result = await check(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      );

      if (result === RESULTS.GRANTED) {
        fetchLocation();
      } else if (result === RESULTS.DENIED) {
        const permissionResult = await request(
          Platform.OS === 'ios'
            ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
            : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        );

        if (permissionResult === RESULTS.GRANTED) {
          fetchLocation();
        } else {
          Alert.alert('Permission Denied', 'Location permission is required.');
        }
      } else {
        Alert.alert(
          'Permission Blocked',
          'Please enable location permissions in settings.'
        );
      }
    } catch (error: any) {
      Alert.alert('Permission Error', error.message);
    }
  };

  // Fetch Current Location
  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const location = `Lat: ${latitude}, Long: ${longitude}`;
        setForm({ ...form, location });
        Alert.alert('Location Pinned', location);
      },
      (error) => {
        Alert.alert('Error Fetching Location', error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  // Handle Form Submission
  const handleSubmit = () => {
    if (!form.name || !form.contactNumber || !form.email) {
      Alert.alert('Validation Error', 'Please fill all required fields.');
      return;
    }
    Alert.alert('Form Submitted', JSON.stringify(form, null, 2));
    console.log('Form Data:', form);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.header}>Profile</Text>

        {/* Personal Details */}
        <View>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleInputChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number"
            keyboardType="phone-pad"
            value={form.contactNumber}
            onChangeText={(text) => handleInputChange('contactNumber', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>

        {/* Address Details */}
        <View>
          <Text style={styles.sectionTitle}>Address Details</Text>
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            keyboardType="number-pad"
            value={form.pincode}
            onChangeText={(text) => handleInputChange('pincode', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            multiline
            value={form.address}
            onChangeText={(text) => handleInputChange('address', text)}
          />
        </View>

        {/* Pin Live Location */}
        <View>
          <Text style={styles.sectionTitle}>Pin Live Location</Text>
          <TouchableOpacity
            style={styles.locationButton}
            onPress={requestLocationPermission}
          >
            <Text style={styles.locationButtonText}>
              📍 Use My Current Location
            </Text>
          </TouchableOpacity>
          {form.location ? (
            <Text style={styles.locationText}>{form.location}</Text>
          ) : null}
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Plant a Life</Text>
          <Text style={styles.footerSubtitle}>Live amongst Living</Text>
          <Text style={styles.footerText}>Spread the joy</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PrimaryWhite,
    padding: responsiveWidth(5),
  },
  backButton: {
    position: 'absolute',
    top: responsiveHeight(3),
    left: responsiveWidth(5),
  },
  backArrow: {
    fontSize: responsiveFontSize(3),
    color: '#000',
  },
  header: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
    marginBottom: responsiveHeight(2),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: responsiveWidth(3),
    marginBottom: responsiveHeight(1.5),
    fontSize: responsiveFontSize(1.8),
  },
  locationButton: {
    backgroundColor: '#007bff',
    padding: responsiveHeight(1.5),
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: responsiveHeight(1),
  },
  locationButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
  },
  locationText: {
    color: '#888',
    fontSize: responsiveFontSize(1.8),
    marginBottom: responsiveHeight(1.5),
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: responsiveHeight(2),
    borderRadius: 8,
    alignItems: 'center',
    marginTop: responsiveHeight(3),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  footer: {
    marginTop: responsiveHeight(5),
    alignItems: 'center',
    marginBottom: responsiveHeight(15),
  },
  footerTitle: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: responsiveHeight(0.5),
  },
  footerSubtitle: {
    fontSize: responsiveFontSize(2),
    color: '#555',
    marginBottom: responsiveHeight(0.5),
  },
  footerText: {
    fontSize: responsiveFontSize(1.8),
    color: '#888',
  },
});

export default Profile;
