import React, { useEffect, useState } from 'react'
import { Text, ActivityIndicator, View, ScrollView } from 'react-native'
import { Product } from '../../models'
import ImageCarousel from "../../components/ImageCarousel/Index"
import DetailBox from '../../components/DetailBox/Index'
import DetailProperty from "../../components/DetailProperty/Index"
import CardButton from "../../components/CardButton/Index"

function Index(props: any) {

    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(props.route.params.product)
    }, [])


    if (!product) {
        return <ActivityIndicator color={"#5d3ebd"} />
    }

    return (
        <View style={{flex : 1}}>
            <ScrollView>
                <ImageCarousel images={product?.images} />
                <DetailBox price={product.fiyat} name={product.name} quantity={product.miktar} />
                <Text style={{ paddingHorizontal: 10, paddingVertical: 14, color: '#808b99', fontWeight: '600' }}>Detaylar</Text>
                <DetailProperty />
            </ScrollView>
            <CardButton />
        </View>
    )
}

export default Index
