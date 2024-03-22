import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; //icone carrinho 
import { FontAwesome } from '@expo/vector-icons'; //icone usuario
// import logohome from '../../assets/logo-home.png';
// import imagemhome from '../../assets/imagem-home.png'


export default function Header() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>

      
          <View style={styles.containerLogo}>
            <Image source={require('../../assets/logo-home.png')} />
          </View>


        <View style={styles.containerIcon}>
            <TouchableOpacity>
              <AntDesign name="shoppingcart" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="user" style={styles.user} size={30} color="black" />
            </TouchableOpacity>
        </View>


        </View>
      </View>
    );
  }

const styles = StyleSheet.create({

    content: {
        display: 'flex',
        flexDirection: 'row',
    },

    containerLogo:{
        marginTop: 50,
        marginLeft: 10,
    },

    containerIcon:{
        marginLeft: 40,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 65,
    },

    user: {
      marginLeft: 40,
    },

 
})
