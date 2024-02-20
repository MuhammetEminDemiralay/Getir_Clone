import React from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");

type productItemType = {
    item : Product
}

function Index({item} : productItemType) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {product : item})} style={{ width: width * 0.28, height: height * 0.25, marginTop: 15, marginLeft: 15, marginBottom: 10 }}>
            <Image style={{ width: width * 0.28, height: width * 0.28, borderRadius: 10, borderWidth: 0.15, borderColor: "gray" }} source={{ uri: item.image}} />
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 10, color: '#747990', textDecorationLine: "line-through" }}>
                    <Text>{"\u20BA"}</Text> {item.fiyat}
                </Text>
                <Text style={{ color: '#5d3ebd', fontWeight: '500', fontSize: 12, marginLeft: 4 }}>
                    <Text>{"\u20BA"}</Text> {item.fiyatIndirimli}
                </Text>
            </View>
            <Text style={{ fontWeight: "600" }}>{item.name}</Text>
            <Text style={{ color: '#747990', fontWeight: '500' }}>{item.miktar}</Text>
            <View style={{shadowRadius : 3.8, shadowOpacity : 0.07, alignItems : 'center', justifyContent : 'center' ,width: 30, height: 30, borderWidth: 0.30, borderColor: 'lightgrey', backgroundColor: '#fff', position: 'absolute', top: -6, right: -6, borderRadius: 4 }}>
                <Entypo name="plus" size={24} color="black" />
            </View>
        </TouchableOpacity>
    )
}

export default Index
