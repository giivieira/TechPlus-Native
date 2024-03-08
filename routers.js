import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import formLogin from './src/components/formLogin';
import formCadastro from './src/components/formCadastro';
import Header from './src/components/Header';


const Stack = createNativeStackNavigator()
export default function Routers() {
  return (

      <Stack.Navigator
        initialRouteName='Header'
        >

        <Stack.Screen 
          name='Header' //Nome do caminho que voce passa no botão quando for chamar essa tela  onPress={() => navigation.navigate('Inicial')} <- Exemplo
          component={Header} //tela
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
  );
}
