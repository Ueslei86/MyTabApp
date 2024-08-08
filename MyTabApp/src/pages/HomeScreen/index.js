import { View, Text } from 'react-native';
import { styles } from './style';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Utilitarios</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Calc')}
      >
        <Text style={styles.buttonText}>Calculadora</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('IMC')}
      >
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>

    </View>
  )
}