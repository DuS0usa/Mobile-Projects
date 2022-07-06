import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import style from '../style/MainStyle.js'

export default function Altura(){
    return(

        <View style={style.boxImc}>
            <Text style={style.titleInfo}> Altura: </Text>
            <Text style={style.textInfo}> 1.77cm </Text>
        </View>



    )
}