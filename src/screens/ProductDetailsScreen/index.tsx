import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { Product } from '../../models'
import  ImageCarousel from "../../components/ImageCarousel/Index"


function Index(props) {

    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(props.route.params.product)
    }, [])


    if(!product){
        return <ActivityIndicator color={"#5d3ebd"} />
    }

    return (
        <View>
            <ImageCarousel images={product?.images}/>
        </View>
    )
}

export default Index
