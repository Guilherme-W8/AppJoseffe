import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/anuncio'

function Anuncios(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}> Anúncios </Text>

      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Anuncio foto='https://static.wixstatic.com/media/71a6c2_a235cf823fb041d5a293b7dbbdc2a5da~mv2.png/v1/fill/w_1200,h_620,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/DARK%20AVENGER%20PNG.png' titulo='Valeu pelas imagems, zCodexz Kevin' linha1='Lorem Ipsum dolor sit amet' linha2='Lorem Ipsum dolor sit amet' linha3='Lorem Ipsum dolor sit amet'/>
          <Anuncio foto='https://s2-techtudo.glbimg.com/oXs_-egjFpFexJYc4UYQh6GZ3FM=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/I/9/o9MjIxSniARVS3ftwjcA/redragon.png' titulo='Lorem Ipsum ' linha1='Lorem Ipsum dolor sit amet' linha2='Lorem Ipsum dolor sit amet' linha3='Lorem Ipsum dolor sit amet'/>
          <Anuncio foto='https://static.wixstatic.com/media/71a6c2_9a20061e42c948d882f481e10f1be04d~mv2.png/v1/fill/w_1304,h_1298,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Hero.png' titulo='Lorem Ipsum ' linha1='Lorem Ipsum dolor sit amet' linha2='Lorem Ipsum dolor sit amet' linha3='Lorem Ipsum dolor sit amet'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios