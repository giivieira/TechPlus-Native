import React, { startTransition } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Image, StatusBar, ImageBackground } from 'react-native';
import fundowelcome from '../../assets/fundo-welcome.png'

const Welcome = () => (
  <View style={styles.container}>
    <ImageBackground source={fundowelcome} resizeMode="cover" style={styles.image}>
      
    <View style={styles.containerIcon}>
            <Image source={require('../../assets/logo-welcome.png')} />
    </View>
      
      <Text style={styles.title}>Nossa Tech, seu estilo.{'\n'}</Text>

      <TouchableOpacity style={styles.btn1}
        onPress={() => NavigationPreloadManager.navigate('comecar')}
        >
        {/* <Text style={styles.txt}>Criar conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn2}
        onPress={() => NavigationPreloadManager.navigate('Entrar')}
        > */}
        <Text style={styles.txt}>COMEÇAR</Text>

      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    top: '-22%'
  },
  btn1: {
    backgroundColor: '#000',
    width: 180,
    height: 40,
    borderRadius: 30,
    top: '-10%',
    alignSelf: 'center'
  },
//   btn2: {
//     backgroundColor: '#000',
//     width: 120,
//     height: 40,
//     borderRadius: 30,
//     left: 50,
//     top: '5%'
//   },
  txt: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 40,
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerIcon: {
    alignSelf: 'center'
  },

});

export default Welcome;