import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ParamListBase, TabNavigationState, RouteProp } from '@react-navigation/native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Favourites from '../screens/Favourites';
import Shop from '../screens/Shop';
import icons from '../constants/icons';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

// Define the props for MyTabBar
type MyTabBarProps = BottomTabBarProps & {
  state: TabNavigationState<ParamListBase>;
  descriptors: Record<string, any>;
  navigation: any;
};

const MyTabBar: React.FC<MyTabBarProps> = ({ state, descriptors, navigation }) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  // Map tab names to their corresponding icons
  const tabIcons: Record<string, any> = {
    Home: icons.HomeBottomTabIcon,
    Favourites: icons.FavouriteBottomTabIcon,
    Shop: icons.ShopBottomTabIcon,
    Profile: icons.ProfileBottomTabIcon,
  };

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <PlatformPressable
              href={buildHref(route.name, route.params)}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}
              key={route.key}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isFocused && styles.focusedIconWrapper, // Highlight focused icon
                ]}
              >
                <Image
                  source={tabIcons[route.name]}
                  style={[
                    styles.icon,
                    { tintColor: isFocused ? colors.primary : colors.text },
                  ]}
                  resizeMode="contain"
                />
              </View>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
};

export default MyTabBar;

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopEndRadius: responsiveWidth(8),
    borderTopStartRadius: responsiveWidth(8),
    paddingVertical: responsiveHeight(1.4),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: responsiveWidth(1.5),
    borderRadius: responsiveWidth(10),
  },
  focusedIconWrapper: {
    backgroundColor: '#FFEB3B', // Highlight color (e.g., yellow background)
    padding: responsiveWidth(1.5),
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(1),
  },
  icon: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
});
