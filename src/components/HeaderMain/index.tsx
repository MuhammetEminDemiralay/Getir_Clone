import React from 'react'
import { View, Text, Image } from 'react-native'
import "./styles"
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

function index() {
    return (
        <View style={styles.headerMain}>
            <View style={styles.headerOne}>
                <Image style={styles.homeIcon} source={require("../../../assets/home_icon.png")} />
                <View style={styles.headerOneContainer}>
                    <Text style={{ fontWeight: '500', fontSize: 17 }}>Ev</Text>
                    <Text style={{ fontWeight: '400', fontSize: 14, color: 'gray' }}>Kazım Karabekir mah</Text>
                    <Entypo name="chevron-small-right" size={26} color="#5d3ebd" />
                </View>
            </View>
            <View style={styles.headerTwo}>
                <Text style={{color : '#5d3ebd', fontWeight : '600', fontSize : 11}}>TVS</Text>
                <Text style={{color : '#5d3ebd', fontWeight : '800', fontSize : 15}}>13dk</Text>
            </View>
        </View>
    )
}

export default index
