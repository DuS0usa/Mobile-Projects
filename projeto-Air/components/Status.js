import React from "react";
import {
    StyleSheet
    , View 
    , Text
} from 'react-native';

import Dados from '../mocks/dados';

export default function Status(){
    return(

        <View style={style.container}> 

            <Text style={style.textStatus}> 
                Enviando para {Dados.Head.Info[0].Nome} | {Dados.Head.Info[0].Cidade} {Dados.Head.Info[0].CEP} 
            </Text>
            
        </View>
    
    );
}


const style = StyleSheet.create({

    container:{
        backgroundColor: '#4f0fea',
        width: '90%',
        height: 50,

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
        borderTopLeftRadius: 0,

        elevation: 10

    },

    textStatus:{
        color: '#ffffff',
        fontSize: 15,
        fontWeight: '900'
    }

})