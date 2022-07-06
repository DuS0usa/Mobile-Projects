
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

export default function app(){
  return(
    <SafeAreaView style={style.boxPrincipal}>
      <ScrollView > 

      {/* ---------| HEADER E NAVEGAÇÃO |----------------------------------------- */}

        <View style={style.boxNav}>
          <Text style={style.txNav}>NYX</Text>
          <Image source={require('./images/nixLogo.png')} style={style.logo}/>
          <Text style={style.txNav}>Perfil</Text>

        </View>

        <View style={style.boxCate}>
            <Text style={style.txCateSelected}> Músicas </Text>
            <Text style={style.txCate}> Artistas </Text>
            <Text style={style.txCate}> Gêneros </Text>
            <Text style={style.txCate}> Álbum </Text>
            <Text style={style.txCate}> Moods </Text>
        </View>

      {/* ------------------------------------------------------------------------ */}


      {/* ---------| CARDS DE MÚSICAS |----------------------------------------- */}
        <View style={style.boxMusicas}>

          <View style={style.cardMusica}>
            <Image source={require('./images/marFOto.webp')} style={style.imgMusica}/>
            <Text style={style.nomeMusica}> Nome Aleatório de Música 1 </Text>
            <View style={style.caixaTexto}> 
              <Text style={style.textoComp}> &lt; unknown &gt; </Text>
              <Text style={style.textoComp1}> 10:00 </Text>
            </View>
          </View>

          <View style={style.cardMusica}>
            <Image source={require('./images/meninoAgua.webp')} style={style.imgMusica}/>
            <Text style={style.nomeMusica}> Nome Aleatório de Música 2 </Text>
            <View style={style.caixaTexto}> 
              <Text style={style.textoComp}> &lt; unknown &gt; </Text>
              <Text style={style.textoComp1}> 4:23 </Text>
            </View>
          </View>

          <View style={style.cardSelected}>
            <Image source={require('./images/arcoIris.webp')} style={style.imgMusica}/>
            <Text style={style.nomeMusica}> Nome Aleatório de Música 3 </Text>
            <View style={style.caixaTexto}> 
              <Text style={style.textoSelected}> &lt; unknown &gt; </Text>
              <Text style={style.textoSelected1}> 2:40 </Text>
            </View>
          </View>

          <View style={style.cardMusica}>
            <Image source={require('./images/diamanteGrande.jpg')} style={style.imgMusica}/>
            <Text style={style.nomeMusica}> Nome Aleatório de Música 4 </Text>
            <View style={style.caixaTexto}> 
              <Text style={style.textoComp}> &lt; unknown &gt; </Text>
              <Text style={style.textoComp1}> 3:00 </Text>
            </View>
          </View>

          <View style={style.cardMusica}>
            <Image source={require('./images/caveiraAsa.webp')} style={style.imgMusica}/>
            <Text style={style.nomeMusica}> Nome Aleatório de Música 5 </Text>
            <View style={style.caixaTexto}> 
              <Text style={style.textoComp}> &lt; unknown &gt; </Text>
              <Text style={style.textoComp1}> 5:00 </Text>
            </View>
          </View>
        </View>
      {/* ------------------------------------------------------------------------ */}
      </ScrollView>
    </SafeAreaView>
  )
}





const style = StyleSheet.create({

  boxPrincipal:{
    backgroundColor: '#080a19',
    flex: 1
  },

  // ---- PARTE DA NAVBAR -----------------||
    boxNav:{
      height: 80,
      paddingTop: 12,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },

    logo:{
      width: 80,
      height: 80
    },

    // iconMenuLF:{
    //   width: 40,
    //   height: 40,
    //   alignSelf: 'flex-start'
    // },

    // iconMenuRG:{
    //   width: 40,
    //   height: 40,
    //   alignSelf: 'flex-end',
    //   margin: 10
    // },

    txNav:{
      fontSize: 20,
      color: '#ffffff',
      fontWeight: '900'
    },
  // -------------------------------------||

  // ---- PARTE DA SELEÇÃO -----------------||
    boxCate:{
      // backgroundColor: 'blue',
      width: '100%',
      height: 50,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: '3%'
    },

    txCate:{
      fontSize: 20,
      color: '#ffffff',
      fontWeight: '600'
    },

    txCateSelected:{
      fontSize: 20,
      color: '#ffffff',
      fontWeight: '900'
    },
  // -------------------------------------||

  // ---- PARTE DAS MÚSICAS -----------------||
    boxMusicas:{
      width: '100%',
      height: 800,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 20,
      flexWrap: 'wrap'
    },

    cardMusica:{
      backgroundColor: '#03040E',
      borderRadius: 20,
      width: '95%',
      height: 120,
      flexDirection: 'column',
      margin: 8,
      flexWrap: 'wrap'
    },

    cardSelected:{
      backgroundColor: '#CF0CD6',
      borderRadius: 20,
      width: '95%',
      height: 120,
      flexDirection: 'column',
      margin: 8,
      flexWrap: 'wrap'
    },

    imgMusica:{
      width: 100,
      height: 100,
      borderRadius: 10,
      margin: 10
      // marginTop: 10,
      // marginLeft: 10,
      // marginRight: 10,
      // marginBottom: 10
    },


    nomeMusica:{
      // backgroundColor: 'green',
      height: 28,
      fontWeight: '900',
      fontSize: 20,
      color: '#FFF',
      flexWrap:'nowrap',
      marginTop: 25,
    },

    caixaTexto:{
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },

    textoComp:{
      fontWeight: '700',
      height: 25,
      fontSize: 17,
      color: '#323138',
      marginRight: 90
    },

    textoComp1:{
      fontWeight: '700',
      height: 25,
      fontSize: 17,
      color: '#323138',
      marginRight: 0
    },

    textoSelected:{
      fontWeight: '700',
      height: 25,
      fontSize: 17,
      color: '#FFF',
      marginRight: 90
    },

    textoSelected1:{
      fontWeight: '700',
      height: 25,
      fontSize: 17,
      color: '#FFF',
      marginRight: 0
    }


  // -------------------------------------||




});