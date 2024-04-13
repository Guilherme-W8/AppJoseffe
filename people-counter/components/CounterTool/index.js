import React, {useState} from 'react'
import { View, Text, Button } from 'react-native'
import { styles } from './styles'

function CounterTool(){
  const [x, Counter] = useState(0)

  function MoreOrLess(action){
    if (action == '+') Counter(x + 1)
    else if (x > 0) Counter(x - 1)
  }

  return(
    <View style={ styles.area }>
      <Text style={styles.titulo}>People Counter</Text>
      <Text style={styles.Counter}>{x}</Text>

      <Button title='+' color='green' onPress={() => MoreOrLess('+')}/>
      <Button title='-' color='red' onPress={() => MoreOrLess('-')}/>
    </View>
  )
}


export default CounterTool;