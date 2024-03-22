import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, ImageBackground} from 'react-native';
import Header from '../../components/Header';
import Produtos from '../../components/Produtos';

export default function Home(){ 
    return (
        <View style={styles.container}>
            <Header/>
            <Produtos/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
    },
});
