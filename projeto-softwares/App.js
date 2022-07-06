
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default function app() {
  return (
    <SafeAreaView>
      <ScrollView>

        <View style={style.react}>
          <View style={style.card}> 
              <Image source={require('./images/react.png')} style={style.logoFlutter}/>
              <Text style={style.text}>React Native</Text>
              <Text style={style.paraph}>
              React Native é a estrutura de desenvolvimento de plataforma cruzada mais popular, com 42% do mercado. 
              Seus benefícios incluem desempenho nativo, recarga de lote, suporte da comunidade e muito mais. 
              Algumas das deficiências do framework são o gerenciamento de memória deficiente, a necessidade de desenvolvedores nativos e desafios de segurança inerentes ao JavaScript.
              </Text>
             
          </View>
        </View>

        <View style={style.flutter}>
          <View style={style.card}>
              <Image source={require('./images/flutter.png')} style={style.logoFlutter}/>
              <Text style={style.text}>Flutter</Text>
              <Text style={style.paraph}>
                Flutter é uma tecnologia muito recente para o desenvolvimento multiplataforma, em comparação com seus irmãos mais velhos (React Native, Ionic, Xamarin). 
                É recém-saído da fornalha do Google, como a gigante da tecnologia é quem está por trás do projeto como um todo.
              </Text>
          </View>
        </View>


        <View style={style.android}>
          <View style={style.card}>
              <Image source={require('./images/android.png')} style={style.logoFlutter}/>
              <Text style={style.text}>Android Studio</Text>
              <Text style={style.paraph}>
              Uma das principais vantagens do Android Studio, é a sua maior variedade de customização. Outro ponto positivo do Android Studio é a sua variedade de recursos. 
              Se, por um lado, o Android Studio tem mais recursos, isso cobra um preço. É que o desempenho da ferramenta pode acabar deixando a desejar.
              </Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  flutter:{
    backgroundColor: '#085c9b'
  },

  logoFlutter:{
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 10
  },

  card:{
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 30,
    padding: 20,
    alignItems: 'center'
  },

  react:{
    backgroundColor: '#63dcfc'
  },

  android:{
    backgroundColor: '#3cdc84'
  },

  text:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#073042',
    fontSize: 24
  },

  paraph:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#073042',
    fontSize: 16,
    marginTop: 18
  }
});