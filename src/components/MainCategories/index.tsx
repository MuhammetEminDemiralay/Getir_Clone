import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Category } from '../../models/index'
import categoriesGetir from '../../../assets/categoriesGetir'
import CategoryItem from '../CategoryItem'

function Index() {

    const [categories, setCategories] = useState<Category[]>(categoriesGetir)

    return (
        <View>
            <View style={styles.listCategoryies}>
                {
                    categories.map((item, index) => (
                        <CategoryItem key={index} item={item} />
                    ))
                }
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    listCategoryies: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    }
})
