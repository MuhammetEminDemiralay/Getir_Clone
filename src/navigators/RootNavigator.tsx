import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';


const Tab = createBottomTabNavigator();

function RootNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#5C3EBC',
                tabBarInactiveTintColor: '#959595',
                headerShown: false,
                tabBarStyle: {
                    height: 80
                }
            }}
        >
            <Tab.Screen
                name='Ana Sayfa'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='Arama'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='Kullanıcı'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />
            <Tab.Screen
                name='Kutu'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color="black" />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default RootNavigator
