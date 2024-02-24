import React from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import { Product } from '../../models'

const { width, height } = Dimensions.get("window")

type CartItemsProps = {
    product: Product
}

function Index({ product }: CartItemsProps) {
    return (
        <View style={{ width: '100%', backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: height * 0.13, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: width * 0.04, backgroundColor: '#fff', width: width * 0.95, borderBottomWidth: 0.25, borderBottomColor: 'lightgrey' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: height * 0.09, height: height * 0.09 }} source={{ uri: product.image }} />
                    <View>
                        <Text style={{ fontSize: 13, fontWeight: '600' }}>{product.name}</Text>
                        <Text style={{ fontSize: 12, marginTop: 3, color: '#848897', fontWeight: '600' }}>{product.miktar}</Text>
                        <Text style={{ color: '#5d3ebd', fontWeight: 'bold', marginTop: 2 }}>
                            <Text>{"\u20BA"}</Text>
                            {product.fiyat}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: width * 0.2, borderColor: 'lightgrey', borderWidth: 0.5, height: height * 0.035, borderRadius: 10 }}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>-</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#5d3ebd', height: height * 0.037, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 12 }}>1</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text>+</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Index
