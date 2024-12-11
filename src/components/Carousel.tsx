import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { width: screenWidth } = Dimensions.get('window');

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const data = [
    { id: '1', title: 'Slide 1', image: 'https://via.placeholder.com/400x200' },
    { id: '2', title: 'Slide 2', image: 'https://via.placeholder.com/400x200' },
    { id: '3', title: 'Slide 3', image: 'https://via.placeholder.com/400x200' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = currentIndex + 1;
      if (nextIndex >= data.length) {
        nextIndex = 0;
      }
      flatListRef.current?.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, [currentIndex]);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.image }} style={styles.image} />
      {/* <Text style={styles.title}>{item.title}</Text> */}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {/* <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: responsiveWidth(92),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(4),
    overflow: 'hidden',
    marginHorizontal: responsiveWidth(1),
    alignSelf: 'center',
  },
  image: {
    width: responsiveWidth(92),
    height: responsiveHeight(25),
    resizeMode: 'cover',
  },
  title: {
    marginTop: responsiveHeight(1),
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: responsiveHeight(1.5),
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#cccccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333333',
  },
});

export default Carousel;
