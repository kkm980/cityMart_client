import React from 'react'
import StackNavigator from './src/routes/StackNavigator'
import CustomDrawer from './src/routes/CustomDrawer'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}  // Optional custom drawer content
        screenOptions={{
          headerShown: false,
          drawerType: 'slide',
        }}>
        <Drawer.Screen name="MainStack" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App