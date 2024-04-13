import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, Image, Pressable } from 'react-native';

import { styles } from './styles';

function Calcular() {
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const img = 'https://www.drrogermoura.com.br/images/artigos/tabela-IMC.png';

  function calculoIMC() {
    const calculo = input1 / (input2 * input2);
    const IMC = calculo.toFixed(2);
    setResultado(IMC);

    if (IMC < 18.5) {
      setMensagem('Abaixo do peso');
    } else if (IMC >= 18.5 && IMC <= 24.9) {
      setMensagem('Peso normal');
    } else if (IMC >= 25 && IMC <= 29.9) {
      setMensagem('Sobrepeso');
    } else if (IMC >= 30 && IMC <= 34.9) {
      setMensagem('Obesidade Grau I');
    } else if (IMC >= 35 && IMC <= 39.9) {
      setMensagem('Obesidade Grau II');
    } else {
      setMensagem('Obesidade Grau III ou Mórbida');
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>CALCULO DE IMC</Text>
        <Image source={{ uri: img }} style={styles.img} />

        <TextInput
          style={styles.entrada}
          placeholder="Digite seu peso"
          onChangeText={(text) => setInput1(Number(text))}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.entrada}
          placeholder="Digite sua altura"
          onChangeText={(text) => setInput2(Number(text))}
          keyboardType="numeric"
        />

        <Button title="Verificar" color="green" fontFamily='cursive' onPress={calculoIMC} />

        {mensagem !== '' && <Text style={styles.titulo}>{mensagem}</Text>}

        <Text style={styles.resultado}>{resultado}</Text>

      </View>
    </SafeAreaView>
  );
}

export default Calcular;