import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';
import formLogin from './src/components/formLogin';


const Stack = createNativeStackNavigator()
export default function Routers() {
  return (

      <Stack.Navigator
        initialRouteName='formLogin'
        >

        <Stack.Screen 
          name='formLogin' //Nome do caminho que voce passa no botão quando for chamar essa tela  onPress={() => navigation.navigate('Inicial')} <- Exemplo
          component={formLogin} //tela
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
  );
}