import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './src/pages/Welcome';


const Stack = createNativeStackNavigator()
export default function Routers() {
  return (

      <Stack.Navigator
        initialRouteName='Welcome'
        >

        <Stack.Screen 
          name='Welcome' //Nome do caminho que voce passa no botão quando for chamar essa tela  onPress={() => navigation.navigate('Inicial')} <- Exemplo
          component={Welcome} //tela
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
  );
}