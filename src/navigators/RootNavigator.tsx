import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import HomeNavigator from './HomeNavigator';
import { TouchableOpacity } from 'react-native';



const Tab = createBottomTabNavigator();

function RootNavigator() {

    const CustomTabBarButton = ({ children }) => {
        return (
            <TouchableOpacity
                style={{
                    width: 58,
                    height: 58,
                    backgroundColor: '#5c3ebc',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50,
                    marginTop : -10,
                    borderWidth : 3,
                    borderColor : '#fff',
                }}
            >
                <Entypo name="list" size={32} color="yellow" />
            </TouchableOpacity>
        )
    }

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
                    height: 60
                }
            }}
        >
            <Tab.Screen
                name='Home Page'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color="gray" />
                    )
                }}
            />
            <Tab.Screen
                name='Search'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" size={24} color="gray" />
                    )
                }}
            />

            <Tab.Screen
                name='List'
                component={HomeNavigator}
                options={{
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    )
                }}
            />

            <Tab.Screen
                name='User'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color="gray" />
                    )
                }}
            />
            <Tab.Screen
                name='Gift'
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="gift" size={24} color="gray" />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default RootNavigator
