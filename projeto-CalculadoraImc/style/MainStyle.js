import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    containerHeader:{
        backgroundColor: '#0b0e20',
        width: '100%',
        height: 350,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        elevation: 2,
    },

    header:{
        width: '80%',
        height: 50,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textHeader:{
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        fontFamily: 'Impact',
        textAlign: 'center'
    },

    boxInfo:{
        width: '95%',
        height: 100,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    boxImc:{
        backgroundColor: '#6200ea',
        width: 90,
        height: 90,
        marginTop: 5,
        borderRadius: 10,
        elevation: 12
    },

    titleInfo:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '800'
    },

    textInfo:{
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '800',
        marginTop: '15%'
    },

    boxInfo2:{
        width: '90%',
        height: 120,
        marginTop: 15,
        backgroundColor: '#1d1e33',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

        borderRadius: 20
    },

    titleClassification:{
        marginTop: 4,
        color: '#fff',
        fontSize: 25,
        fontWeight: '900',
    },

    boxClassification:{
        backgroundColor: '#fff',
        width: '95%',
        height: 60,
        marginTop: '2%',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: '#6200ea',
        flexDirection: 'column',
        alignItems: 'center',
        elevation: 24,
    },

    textClassification:{
        fontSize: 35,
        fontWeight: '600',
        fontFamily: 'verdana'
    },


    containerBody:{
        marginTop: '10%',
        width: '100%',
        height: 400,

        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bodyText:{
        width: '90%',
        height: 350,
        alignItems: 'center',
    },

    titleInformation:{
        color: '#404040',
        fontSize: 25,
        fontWeight: '900',
    },

    textInformation:{
        color: '#404040',
        fontSize: 20,
        fontWeight: '500',
    },

    textFormat:{
        marginTop: 20,
        width: '90%',
        height: 320
    },

    foto:{
        width: 100,
        height: 100
    },

    // fotoImc:{
    //     width: '100%',
    //     height: 500
    // },

    // boxFotoImc:{
    //     width: '100%',
    //     height: 500,
    //     flexDirection: 'column',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }




});

export default styles