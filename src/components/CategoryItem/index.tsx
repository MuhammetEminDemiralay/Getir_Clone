import React from 'react'
import { Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Category } from '../../models';

type categoryItemProps = {
    item : Category
}

function index(item : categoryItemProps) {
    const {width, height} = Dimensions.get("window");
    return (
        <TouchableOpacity style={{width : width * 0.25, height : width * 0.25, alignItems : 'center', justifyContent : 'center', marginTop : 8}}>
            <Image
                source={{uri : item.item.src}}
                style={{width : width * 0.18, height : width * 0.18, borderRadius : 8}}/>
            <Text>{item.item.name}</Text>
        </TouchableOpacity>
    )
}

export default index
