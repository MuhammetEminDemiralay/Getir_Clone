import { StyleSheet } from "react-native"
import {Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    headerMain : {
        height : height * 0.064,
        backgroundColor : "#f7d102",
        flexDirection : 'row',
        alignItems : 'center'
    },headerOne : {
        backgroundColor : '#fff',
        width : '80%',
        height : '100%',
        flex : 1,
        flexDirection : 'row',
        alignItems : 'center',
        columnGap : 10,
        paddingHorizontal : '3%',
        borderTopRightRadius : 25,
        borderBottomRightRadius : 25,
    },
    headerOneContainer : {
        flexDirection : 'row',
        alignItems : 'center',
        columnGap : 4,
        borderLeftWidth : 3,
        borderColor : '#f3f2f0',
        paddingLeft : 5
    },
    homeIcon : {
        width : 25,
        height : 25
    },
    headerTwo : {
        width : '20%',
        height : '100%',
        alignItems : 'center',
        justifyContent : 'center'
    }
})

export default styles