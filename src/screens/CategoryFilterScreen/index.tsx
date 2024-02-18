import React, { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import CategoryFiltering from '../../components/CategoryFiltering'
import { Category } from '../../models'
function Index(props : any) {

    const [category, setCategory] = useState<Category>(props.route.params.category)
    
    return (
        <ScrollView>
            <CategoryFiltering category={category}/>
        </ScrollView>
    )
}

export default Index
