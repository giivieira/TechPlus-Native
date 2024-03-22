import React from "react";
import {View, StyleSheet, Text, StatusBar, TouchableOpacity, Image} from "react-native";


const Produtos = () => {
  const productsData = [
    { id: '1', title: 'Case 1', imageUrl: 'https://via.placeholder.com/150' },
    { id: '2', title: 'Case 2', imageUrl: 'https://via.placeholder.com/150' },
    { id: '3', title: 'Case 3', imageUrl: 'https://via.placeholder.com/150' },
    { id: '4', title: 'Case 4', imageUrl: 'https://via.placeholder.com/150' },
  ];

  // Componente para renderizar cada item da lista
  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Cases</Text>
      <FlatList
        data={productsData}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
    marginTop: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 16,
    margin: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default Produtos;
