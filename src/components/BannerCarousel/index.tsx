import React, { useState } from 'react'
import { Dimensions, FlatList, Image } from 'react-native'

function Index() {

    const { width, height } = Dimensions.get('window')
    const [banners, setBanners] = useState<string[]>([
        "https://cdn.getir.com/misc/65bd2927a0543d1cfbdbdb0f_picUrl_tr_1706896312030.jpeg",
        "https://banner-marketing-cdn.getir.com/images/88556038-42d9-4d62-b376-77a594bad6f0.jpg",
        "https://banner-marketing-cdn.getir.com/images/0f2d55d3-ed11-4857-b470-34a54c7111bf.jpg",
        "https://cdn.getir.com/misc/65a69529b2d74ebd79f1f32a_picUrl_tr_1705479256682.jpeg"
    ]);

    return (
        <FlatList

            data={banners}
            renderItem={(item) => (
                <Image
                    source={{ uri: item.item }}
                    style={{ width: width, height: height * 0.25 }}
                />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            snapToAlignment='center'
            decelerationRate={'fast'}
        >

        </FlatList>
    )
}

export default Index
