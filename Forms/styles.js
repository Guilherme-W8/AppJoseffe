import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
        fontSize:30,
        color:'black',
        fontFamily:'IMPACT',
        textAlign: 'center',
        marginTop: 40,
    },
    img: {
        margin: 25,
        width: 300,
        height: 200,
        alignSelf: 'center',
    },
    entrada: {
        height: 45,
        width: 200,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 18,
        padding: 10,
        alignSelf: 'center'
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center', 
        width: 200, 
    },
    textoBotao: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 15,
    },
    resultado: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'red',
        marginTop: 40,
    },
     container: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'red',
        marginTop: 30,
    },
    global: {
        fontFamily: 'arial',
        alignSelf: 'left',
        paddingTop: 5,
        fontSize: 15,
    },
    titulo: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'red',
        marginTop: 20,
    },
    botaoConfirmar: {
        fontFamily: 'arial',
        alignSelf: 'center',
        fontSize: 30,
        color: 'blue',
        marginTop: 20,
    },
        confirmar: {
        backgroundColor: 'darkblue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
        width: 300,
        marginLeft: 50,
        marginBottom: 10
  },
    confirmarText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
  }
})
 
export {styles}