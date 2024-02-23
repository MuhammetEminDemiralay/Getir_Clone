import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import CategoryFilterScreen from '../screens/CategoryFilterScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen/Index'
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import CartScreen from '../screens/CartScreen/Index'
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails"];
function MyStack({ navigation, route }: { navigation: any, route: any }) {
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
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{ paddingVertical: 5, paddingLeft: 5, flexDirection: 'row', alignItems: 'center', width: width * 0.25, height: 33, backgroundColor: '#fff', marginRight: width * 0.03, borderRadius: 9 }}>
              <FontAwesome name="shopping-basket" size={18} color="#5c3ebc" style={{ flexDirection: 'row', alignItems: 'center' }} />
              <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#f3effe', height: 33, borderTopEndRadius: 9, borderBottomEndRadius: 9, marginLeft: 5 }}>
                <Text style={{ fontWeight: 'bold', color: '#5d3ebd', fontSize: 13 }}>{"\u20ba"}24,00</Text>
              </View>
            </TouchableOpacity>
          ),
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
      <Stack.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#5c3ebc' },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerTitle: () => (
            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Sepetim</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
              <Ionicons name="close-sharp" size={28} color="#fff" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{marginRight : 10}}>
              <Feather name="trash-2" size={26} color="#fff" />
            </TouchableOpacity>
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />
}
