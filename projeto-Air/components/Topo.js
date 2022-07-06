import React from "react";
import {
    StyleSheet
    , View 
    , Text
    , Image
} from 'react-native';

export default function Topo(){
    return(

        <View style={style.container}>
            <Text style={style.textTop}> AirFlying </Text>  
            <Image source={require("../images/plane.png")} style={style.imageTop} />
        </View>

    );
}


const style = StyleSheet.create({

    container:{
        backgroundColor: '#4f0fea',
        width: '100%',
        height: 80,

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        elevation: 10
    },

    imageTop:{
        width: 40,
        height: 40
    },

    textTop:{
        color: '#ffffff',
        fontSize: 40,
        fontWeight: '900'
    }

})