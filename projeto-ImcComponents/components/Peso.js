import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import style from '../style/MainStyle.js'

export default function Peso(){
    return(

        <View style={style.boxImc}>
            <Text style={style.titleInfo}> Peso </Text>
            <Text style={style.textInfo}> 65,4Kg </Text>
        </View>



    )
}