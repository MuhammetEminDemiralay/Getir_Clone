import React from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import productsGetir from '../../../assets/productsGetir'
import CartItem from '../../components/CartItem/Index'
import ProductItem from "../../components/ProductItem/index"

const { width, height } = Dimensions.get("window");

function Index() {


    return (
        <View  style={{flex : 1}}>
            <ScrollView style={{ flex: 1 }}>
                <FlatList
                    data={productsGetir.slice(0, 3)}
                    renderItem={({ item }) => <CartItem product={item} />}
                />
                <Text style={{padding : 10}}>Önerilen ürünler</Text>
                <ScrollView
                style={{backgroundColor : '#fff'}}
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    horizontal={true}
                >
                    {
                        productsGetir.map((item, index) => (
                            <ProductItem key={index} item={item} />
                        ))
                    }
                </ScrollView>
            </ScrollView>
            <View style={{ position : "absolute", bottom : 0, width : '100%', height: height * 0.12, flexDirection: "row", alignItems: 'center', paddingHorizontal: '4%', backgroundColor: '#fefefe' }}>
                <TouchableOpacity style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center', height: height * 0.06, flex: 3, backgroundColor: '#5d3ebd' }}>
                    <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16 }}>Devam</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontWeight: '500' }}>{"\u20BA"} 24,00</Text>
                </View>
            </View>
        </View>
    )
}

export default Index
