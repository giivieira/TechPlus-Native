import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from "react-native";
import {AntDesign} from '@expo/vector-icons'; //icone carrinho 
import { FontAwesome } from '@expo/vector-icons'; //icone usuario
import logohome from '../../assets/logo-home.png';

export default function Header() {
    return (
      <View style={styles.container}>
        <View style={styles.content}>


          <View style={styles.containerLogo}>
            <Image source={require('../../assets/logo-home.png')} />
          </View>

        <View style={styles.containerIcon}>
            <AntDesign name="shoppingcart" size={24} color="black" />
            <FontAwesome name="user" size={24} color="black" />
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
        marginLeft: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 65,
    },

})
