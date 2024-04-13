import { View, Text } from 'react-native';
import PersonalPhoto from './components/photo'; 
import Description from './components/information';

function App(){
  return(
    <View>
      <PersonalPhoto />
      <Description />
    </View>
  )
}

export default App;