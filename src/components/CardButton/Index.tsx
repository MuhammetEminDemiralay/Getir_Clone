import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'

const { width, height } = Dimensions.get("window");

function Index() {
    return (
        <TouchableOpacity style={{ backgroundColor: '#fff', width: '100%', height: height * 0.11,position : 'absolute', bottom : 0, alignItems : 'center', justifyContent : 'center'}}>
            <View style={{height : height * 0.06, width : width * 0.90, backgroundColor : '#5d39c1', marginHorizontal : '5%', borderRadius : 8, justifyContent : 'center', alignItems : 'center'}}>
                <Text style={{color : '#fff', fontWeight : '700', fontSize : 16}}>
                    Sepete ekle
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Index
