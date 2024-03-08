import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import fundowelcome from '../../assets/fundo-welcome.png'

export default function form({ }) {
  return (


    <View style={styles.container}>
      <ImageBackground source={fundowelcome} resizeMode="cover" style={styles.image}>

        <View style={styles.containerIcon}>
          <Image source={require('../../assets/logo-welcome.png')} />
        </View>

        <Text style={styles.title}>Nossa Tech, seu estilo.{'\n'}</Text>

        <View style={styles.container}>
            <Text style={styles.txt2}>E-mail</Text>
            <TextInput style={styles.input} onChangeText={(e) => setCpf(e)} placeholder="Insira um e-mail"/>
            <Text style={styles.txt2}>Senha</Text>
            <TextInput style={styles.input} onChangeText={(e) => setPassword(e)} placeholder="Insira uma senha" secureTextEntry={true} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.action}>CRIAR CONTA</Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

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
    top: '-22%',
  },
  btn: {
    backgroundColor: '#000',
    width: 180,
    height: 40,
    borderRadius: 30,
    top: '-40%',
    alignSelf: 'center'
  },
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

  txt2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    top: '-70%',
    marginLeft: 50,
    
  },

  action: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 18,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#fff',
    height: 50,
    top: '-70%',
    borderRadius: 10,
    width: 300,
    marginLeft: 50,

  }

});

