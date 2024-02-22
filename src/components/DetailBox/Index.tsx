import React from 'react'
import { Text, View } from 'react-native'

type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
}

function Index({ price, name, quantity }: DetailBoxProps) {
  return (
    <View style={{ alignItems: 'center', width: '100%', height: 80, backgroundColor: '#fff' }}>
      <Text style={{ color: '#5d3ebd', fontWeight: 'bold', marginTop: 12, fontSize : 18}}>
        <Text>{"\u20BA"}</Text>
        {price}
      </Text>
      <Text style={{fontSize : 16, fontWeight : '700'}}>
        {name}
      </Text>
      <Text style={{color : '#848897', fontWeight : '600'}}>
        {quantity}
      </Text>
    </View>
  )
}

export default Index
