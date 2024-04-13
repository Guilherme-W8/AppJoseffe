import { View, Image} from 'react-native'
import {styles} from './styles'

function PersonalPhoto(){

  let personalPhoto = 'https://r2.easyimg.io/qvf7gn718/myimg.jpg';

  return( 
    <View style={styles.area}>

      <Image
          source = {{ uri: personalPhoto }}
          style = {[ styles.tamanhoImg, styles.area ]}
     />
    </View>
  )
}

export default PersonalPhoto;