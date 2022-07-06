
import React from 'react';
import {
  ScrollView
  , SafeAreaView
  , View
  , StyleSheet
} from 'react-native';

import Topo from './components/Topo';
import Status from './components/Status';
import Card from './components/Card';

export default function app(){



  return(

    <ScrollView>
      <SafeAreaView>

        {/* |-------> VIEW CONTENDO O TOPO E O STATUS <--------| */}
        <View style={style.containerHeader}> 
          <Topo />

          <View style={style.containerStatus}>
            <Status />
          </View>
        </View>
        {/* |-------> ------------------------------- <--------| */}


        {/* |-------> VIEW CONTENDO O COMP. DOS CARDS <--------| */}
        <View style={style.containerBody}>
          <Card />  
        </View>
        {/* |-------> ------------------------------- <--------| */}

      </SafeAreaView>
    </ScrollView>

  );
}


const style = StyleSheet.create({

  containerHeader:{
    width: '100%',

    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },


  containerStatus:{
    width: '100%',
    
    alignItems:'center',
    flexDirection: 'column',
    marginTop: 20
  },


  containerBody:{
    width: '100%',
    marginTop: '5%',

    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  }

})

