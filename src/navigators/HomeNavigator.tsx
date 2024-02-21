import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Image, Text, TouchableOpacity } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/Index'
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails"];
function MyStack({navigation, route} : {navigation : any, route : any}) {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    // console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      // console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      // console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
  const navigation_user = useNavigation();

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
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitle: () => (
            <Text style={{ fontWeight: '500', color: '#fff', fontSize: 20 }}>
              Ürünler
            </Text>
          )
        }}
      />
      <Stack.Screen
        name='ProductDetails'
        component={ProductDetailsScreen}
        options={{
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 12 }}>
              <Ionicons name="close" size={24} color="#fff" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: '500', color: '#fff' }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 15, paddingTop: 10 }}>
              <AntDesign name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default function HomeNavigator({navigation, route}){
  return <MyStack navigation={navigation} route={route}/> 
}
