import React, { useEffect } from 'react';
import StackNavigator from './src/routes/StackNavigator';
import CustomDrawer from './src/routes/CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { persistor, store } from './src/services/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Counter from './src/components/Counter';

const Drawer = createDrawerNavigator();

const App: React.FC = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContent={(props: DrawerContentComponentProps) => (
              <CustomDrawer {...props} />
            )} // Optional custom drawer content
            screenOptions={{
              headerShown: false,
              drawerType: 'slide',
              drawerStyle: {
                width: responsiveWidth(100),
                backgroundColor: 'transparent',
              }
            }}
          >
            <Drawer.Screen name="MainStack" component={StackNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
