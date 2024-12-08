import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  StatusBar,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Header from '../components/Header';
import colors from '../constants/colors';

const CartPage: React.FC = () => {
  const cartItems = [
    {
      id: '1',
      name: 'Watermelon Peperomia',
      price: 350,
      quantity: 1,
      image: 'https://via.placeholder.com/80', // Replace with actual images
    },
    {
      id: '2',
      name: 'Peperomia Obtusfolia',
      price: 400,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
    {
      id: '3',
      name: 'Cactus',
      price: 260,
      quantity: 1,
      image: 'https://via.placeholder.com/80',
    },
  ];

  const deliveryFee = 80;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0) + deliveryFee;

  const renderItem = ({ item }: { item: typeof cartItems[0] }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>₹{item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity style={styles.quantityButton}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>🗑</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.PrimaryWhite }}>
      <StatusBar backgroundColor={colors.DarkBg} />
      <Header backgroundColor={colors.PrimaryWhite} />
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListFooterComponent={
          <View>
            <View style={styles.deliveryContainer}>
              <Text style={styles.deliveryText}>Delivery Fee</Text>
              <Text style={styles.deliveryFee}>₹{deliveryFee}</Text>
            </View>
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.totalPrice}>₹{total}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(5),
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(2),
    padding: responsiveWidth(2),
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
  itemImage: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 10,
  },
  itemDetails: {
    flex: 2,
    marginLeft: responsiveWidth(4),
  },
  itemName: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: responsiveFontSize(1.8),
    color: '#777',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    padding: responsiveWidth(2),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: responsiveWidth(1),
  },
  buttonText: {
    fontSize: responsiveFontSize(2),
  },
  quantityText: {
    fontSize: responsiveFontSize(2),
  },
  deleteButton: {
    marginLeft: responsiveWidth(2),
  },
  deleteText: {
    fontSize: responsiveFontSize(3),
    color: '#f00',
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(2),
    paddingVertical: responsiveHeight(1),
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  deliveryText: {
    fontSize: responsiveFontSize(2),
    color: '#333',
  },
  deliveryFee: {
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: responsiveHeight(1),
  },
  totalText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    paddingVertical: responsiveHeight(1.5),
    borderRadius: 5,
    alignItems: 'center',
    marginTop: responsiveHeight(2),
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
  },
});

export default CartPage;
