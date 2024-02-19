import React, { useState } from 'react'
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const { height, width } = Dimensions.get("window");

const TypeBox = ({setCat, item, active} : {setCat : any, item : string, active : string}) => {
    return (
        <TouchableOpacity onPress={() => setCat(item)} style={{paddingHorizontal : 10, flexDirection : 'row', alignItems : 'center'}}>
            <Text style={[{fontSize : 15, color:'#7849f7', padding : 5, borderRadius : 3, borderWidth : 0.25, borderColor :'#c0c0c0'}, item == active && {backgroundColor : '#7849f7', color : '#fff'}]}>{item}</Text>
        </TouchableOpacity>
    )
}

function Index() {

    const [category, setCategory] = useState<string>("Birlikte iyi gider");

    return (
        <ScrollView style={{ width: '100%', backgroundColor: '#fff', height: height * 0.07, borderBottomWidth : 3, borderBottomColor : 'lightgrey'}}
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}>
            {
                ["Birlikte iyi gider", "Çubuk", "Külah", "Çoklu", "Yen ürünler"].map((item, index) => (
                    <TypeBox setCat={setCategory} key={index} item={item} active={category}/>
                ))
            }
        </ScrollView>
    )
}

export default Index
