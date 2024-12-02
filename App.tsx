import React, { useEffect } from 'react';
import StackNavigator from './src/routes/StackNavigator';
import CustomDrawer from './src/routes/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props: DrawerContentComponentProps) => (
          <CustomDrawer {...props} />
        )} // Optional custom drawer content
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
        }}
      >
        <Drawer.Screen name="MainStack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
