import { View, Text } from 'react-native';
import { styles } from './styles'

function Description(){
    return(
        <View>
            <Text style={[styles.textoPrincipal, styles.marginEsquerdaTexto]}>Personal Data</Text>
            <Text style={[styles.data]}>Nome: Guilherme Correia</Text>
            <Text style={[styles.data]}>Idade: Guilherme Correia</Text>

            <Text style={[styles.textoPrincipal, styles.marginEsquerdaTexto]}>Graduation</Text>
            <Text style={[styles.data]}>Analisys and Development Systems</Text>

            <Text style={[styles.textoPrincipal, styles.marginEsquerdaTexto]}>Experience</Text>
            <Text style={[styles.data]}>Hortifruti Repositor</Text>
            <Text style={[styles.data]}>TI Intern at SEDUC SV</Text>

            <Text style={[styles.textoPrincipal, styles.marginEsquerdaTexto]}>Projects</Text>
            <Text style={[styles.data]}>Java SpringBoot - dslist</Text>
            <Text style={[styles.data]}>Spotify - Clone with Html/Css/Javascript</Text>
        </View>
    )
}


export default Description;