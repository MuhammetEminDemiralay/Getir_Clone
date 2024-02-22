import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'


const { width, height } = Dimensions.get("window");


function Index({ images }: { images: string[] }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const onViewRef = useRef((viewableItems : any) => {
        if (viewableItems.viewableItems.length > 0) {
            setActiveIndex(viewableItems.viewableItems[0].index)
        }
    })

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 })

    return (
        <View style={{ alignItems: 'center', width: '100%', height: height * 0.25, paddingTop: 25, backgroundColor: '#fff' }}>
            <FlatList
                style={{ width: width * 0.5, height: height * 0.21 }}
                data={images}
                renderItem={(item) => (
                    <Image
                        source={{ uri: item.item }}
                        style={{ resizeMode: 'stretch', width: width * 0.5, height: height * 0.2 }}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={width * 0.5}
                decelerationRate={'fast'}
                viewabilityConfig={viewConfigRef.current}
                onViewableItemsChanged={onViewRef.current}
            >
            </FlatList>
            <View style={{ flexDirection: "row", alignItems: 'center', width: 30, height: 12, justifyContent: 'space-around' }}>
                {images.map((image, index) => (
                    <View key={index} style={[styles.dot, { backgroundColor: activeIndex == index ? '#5d3ebd' : 'gray' }]} />
                ))}
            </View>
        </View>

    )
}

export default Index

const styles = StyleSheet.create({
    dot: {
        width: 8,
        height: 8,
        borderRadius: 50
    }
})
