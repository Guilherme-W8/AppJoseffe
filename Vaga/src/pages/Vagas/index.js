import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Vaga from '../../components/Vaga'

function Vagas(){
  return(
    <View style={styles.tela}>
      <Text style={styles.titulo}> Vagas </Text>
        <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
          <Vaga titulo='Desenvolvedor Backend' salario='R$ 2500' descricao='Trabalhar com .NET' contato='Veigh - 011 5454545 ou kevi@gmail.com'/>
          <Vaga titulo='Analista de Banco Dados' salario='R$ 5500' descricao='Trabalhar com Python e SQL.' contato='Veigh - 011 34343434 ou kevi@gmail.com'/>
          <Vaga titulo='Gerente de Projetos de Software' salario='R$ 7700' descricao='Gerenciar projetos de TI desde o planejamento até a implementação, coordenando equipes e recursos.' contato='Veigh - 011 34343434 ou leandrin@gmail.com'/>
          <Vaga titulo='Analista de Segurança da Informação' salario='R$ 6200' descricao='Garantir a segurança dos sistemas e dados da empresa, realizando análises de vulnerabilidades e implementando medidas de proteção.' contato='Veigh - 011 45454545 ou leandrin@gmail.com'/>
        </ScrollView>
    </View>
  )
}

export default Vagas