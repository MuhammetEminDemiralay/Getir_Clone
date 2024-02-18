import React from 'react'
import { Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Category } from '../../models';
import { useNavigation } from '@react-navigation/native'

type categoryItemProps = {
    item : Category
}

function Index(item : categoryItemProps) {
    const navigation = useNavigation();
    const {width, height} = Dimensions.get("window");
    return (
        <TouchableOpacity onPress={() => navigation.navigate("CategoryDetails", {category : item})} style={{width : width * 0.25, height : width * 0.25, alignItems : 'center', justifyContent : 'center', marginTop : 8}}>
            <Image
                source={{uri : item.item.src}}
                style={{width : width * 0.18, height : width * 0.18, borderRadius : 8}}/>
            <Text>{item.item.name}</Text>
        </TouchableOpacity>
    )
}

export default Index
