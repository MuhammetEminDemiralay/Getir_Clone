import React, { useState } from 'react'
import { Dimensions, ScrollView } from 'react-native'
import CategoryFiltering from '../../components/CategoryFiltering'
import { Category } from '../../models'
import TypeFiltering from "../../components/TypeFiltering"
import ProductContainer from "../../components/ProductContainer"

function Index(props : any) {

    
    const [category, setCategory] = useState<Category>(props.route.params.category.item.name)
    
    return (
        <ScrollView>
            <CategoryFiltering category={category}/>
            <TypeFiltering />
            <ProductContainer/>
        </ScrollView>
    )
}

export default Index
