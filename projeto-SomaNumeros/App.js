import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import style from './style/style.js';

export default function app(){

    const[number1, setNumberOne] = useState();
    const[number2, setNumberTwo] = useState();
    const[result, setResult] = useState();

    const somarNumeros = ()=>{
      const result = Number(number1) + Number(number2);
      setResult(result);
    }

  return(

    <View>
      <Text style={style.text}> Soma de dois números </Text>
      
      <TextInput
        placeholder='Digite o primeiro número'
        autoFocus={true}

        onChangeText={text => setNumberOne(text)}
      />

      <TextInput
        placeholder='Digite o segundo número'

        onChangeText={text => setNumberTwo(text)}
      />

      <Button
        title='Calcular'

        onPress={()=> somarNumeros()}
      />

      <Text> Resultado: {result} </Text>

    </View>










  )
}