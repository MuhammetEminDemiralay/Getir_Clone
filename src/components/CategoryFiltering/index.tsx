import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import categoriesGetir from '../../../assets/categoriesGetir'
import { Category } from '../../models'

const { width, height } = Dimensions.get('window')
const CategoryBox = ({ item, active}: { item: Category, active : Category }) => {
    return (
        <View style={[{flex : 1, paddingHorizontal : 10, flexDirection : 'row', alignItems : 'center'}, item.name == active.name && { backgroundColor : 'red'}]}>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#fff' }}>
                {item.name}
            </Text>
        </View>
    )
}
function Index({category} : {category : Category}) {
    const [categories, setCategories] = useState<Category[]>(categoriesGetir)
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            bounces={true}
            horizontal={true}
            style={{ width: '100%', height: height * 0.065, backgroundColor: '#7849f7' }}
        >
            {
                categories.map((item, index) => (
                    <CategoryBox key={index} item={item} active={category}/>
                ))
            }
        </ScrollView>
    )
}

export default Index
