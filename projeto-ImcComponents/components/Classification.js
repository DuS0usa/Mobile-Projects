import React from "react";
import {StyleSheet, View, Text} from "react-native";
import style from '../style/MainStyle.js';

export default function Classification(){
    return(
        <View style={style.boxInfo2}>
              <Text style={style.titleClassification}> Classificação: </Text>
              <View style={style.boxClassification}> 
                <Text>
                  <Text style={style.textClassification}> Peso Normal </Text>
                </Text>
              </View>
        </View>

    )
}