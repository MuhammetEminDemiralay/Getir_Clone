import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Image, Text } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='home'
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitle: () => (
            <Image
              source={require('../../assets/getir_logo.png')}
              style={{ width: 70, height: 30 }}
            />
          )
        }}
      />
      <Stack.Screen
        name='CategoryDetails'
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible : false,
          headerTintColor : '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitle: () => (
            <Text style={{fontWeight : '500', color : '#fff', fontSize : 20}}>
              Ürünler
            </Text>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator
