import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '2', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '3', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '4', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '5', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '6', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '7', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '8', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '9', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '10', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpapercave.com/wp/wc1797125.jpg' },
  { id: '11', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '12', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '13', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '14', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '15', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '16', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '17', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '18', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '19', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '20', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
  { id: '21', title: 'Barang Bagus', price: 'Rp 200.000', imageUrl: 'https://wallpaperaccess.com/full/2560742.jpg' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://wallpapercave.com/wp/wc1797125.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Toko Barang</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});

