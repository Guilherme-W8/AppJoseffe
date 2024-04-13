import {useState} from 'react'
import {View, Text, Image, TextInput, Button} from 'react-native'
import {styles} from './styles'
import Campo from '../../components/Campo'

function Combustivel(){
  const [resultado, setResultado] = useState()
  const [gasolina, setGasolina] = useState()
  const [alcool, setAlcool] = useState()

  function calcularCombustivel(){
    r = alcool / gasolina

    if (r < 0.7)
      setResultado('Abasteça com Alcool')
    else
      setResultado('Abasteça com Gasolina')
  }

  return(
    <View>
      <Text style={styles.titulo}>Alcool ou Gasolina</Text>

      <View style={styles.imagem}>
        <Image
          source={{uri: 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
          style={{width: 200, height: 100}}
        />
      </View>

      <Campo label='Digite o valor do Alcool' funcao={setAlcool} tipo='numeric'/>

      <Campo label='Digite o valor da Gasolina' funcao={setGasolina} tipo='numeric'/>

      <View style={styles.botao}>
        <Button title='Calcular' color='green' onPress={calcularCombustivel} />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  )
}

export default Combustivel