import React from 'react'
import { Text, View } from 'react-native'
import ProductItem from "../../components/ProductItem"
import productsGetir from '../../../assets/productsGetir'
function Index() {
    return (
        <View>
            <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                {
                    productsGetir.slice(0, 2).map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))

                }
            </View>

            <Text style={{ fontWeight: '900', color: 'gray', padding: 14 }}>Çubuk</Text>

            <View style={{backgroundColor : '#fff' , flexDirection: 'row', flexWrap : 'wrap'}}>
                {
                    productsGetir.slice(2).map(item => (
                        <ProductItem key={item.id} item={item} />
                    ))

                }
            </View>
        </View>
    )
}

export default Index
