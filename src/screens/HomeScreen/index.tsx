import React from 'react'
import { ScrollView } from 'react-native'
import HeaderMain from '../../components/HeaderMain'
import BannerCarousel from '../../components/BannerCarousel'
import MainCategories from '../../components/MainCategories'

function Index() {
    return (
        <ScrollView stickyHeaderIndices={[0]}>
            <HeaderMain/>
            <BannerCarousel/>
            <MainCategories/>
        </ScrollView>
    )
}

export default Index
