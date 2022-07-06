import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import style from '../style/MainStyle.js'

export default function Imc(){
    return(

        <View style={style.boxImc}>
            <Text style={style.titleInfo}> IMC: </Text>
            <Text style={style.textInfo}> 22,4 </Text>
        </View>



    )
}