import React from "react";
import {
    StyleSheet
    , View 
    , Text
    , Image
} from 'react-native';

import img1 from '../assets/cachoeiras.jpg';
import img2 from '../assets/montanhas-geladas.jpg';
import img3 from '../assets/por-do-sol.jpg';
import img4 from '../assets/rio-lindo.jpg';

import Dados from '../mocks/dados';

export default function Status(){
    return(

        <View style={style.containerCards}>

            <View style={style.card}> 
                <Image source={img1} style={style.imageCard}/>

                <View style={style.containerConteudo}>
                    <Text style={style.textTitle}> {Dados.Itens.Lista[0].Lugar} </Text>
                    <Text style={style.textDesc}> {Dados.Itens.Lista[0].Descrição} </Text>

                    <Text style={style.textPrice}> R${Dados.Itens.Lista[0].Preço} </Text>
                </View>
            </View>



            <View style={style.card}> 
                <Image source={img2} style={style.imageCard}/>

                <View style={style.containerConteudo}>
                    <Text style={style.textTitle}> {Dados.Itens.Lista[1].Lugar} </Text>
                    <Text style={style.textDesc}> {Dados.Itens.Lista[1].Descrição} </Text>

                    <Text style={style.textPrice}> R${Dados.Itens.Lista[1].Preço} </Text>
                </View>
            </View>



            <View style={style.card}> 
                <Image source={img3} style={style.imageCard}/>

                <View style={style.containerConteudo}>
                    <Text style={style.textTitle}> {Dados.Itens.Lista[2].Lugar} </Text>
                    <Text style={style.textDesc}> {Dados.Itens.Lista[2].Descrição} </Text>

                    <Text style={style.textPrice}> R${Dados.Itens.Lista[2].Preço} </Text>
                </View>
            </View>



            <View style={style.card}> 
                <Image source={img4} style={style.imageCard}/>

                <View style={style.containerConteudo}>
                    <Text style={style.textTitle}> {Dados.Itens.Lista[3].Lugar} </Text>
                    <Text style={style.textDesc}> {Dados.Itens.Lista[3].Descrição} </Text>

                    <Text style={style.textPrice}> R${Dados.Itens.Lista[3].Preço} </Text>
                </View>
            </View>

        </View>
        
    
    );
}


const style = StyleSheet.create({

    containerCards:{
        width: '100%',

        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },

    card:{
        backgroundColor: '#fd8b00',
        width: 180,
        height: 260,

        borderRadius: 10,
        marginTop: 15,

        elevation: 5
    },

    imageCard:{
        width: 180,
        height: 160,

        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },

    containerConteudo:{
        width: '100%',

        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 5,

    },



    textTitle:{
        color: '#ffffff',
        fontSize: 20,
        fontWeight: '800'
    },

    textDesc:{
        color: '#ffffff',
        fontSize: 15
    },

    textPrice:{
        color: '#ffffff',
        fontWeight: '800',
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 10
    }


})