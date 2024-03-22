import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

export default function Routers() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name='Home' //Nome do caminho que voce passa no botão quando for chamar essa tela  onPress={() => navigation.navigate('Inicial')} <- Exemplo
        component={Home} //Tela
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
