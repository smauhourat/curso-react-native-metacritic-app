import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { useEffect, useState } from "react";
import { getProducts } from "./lib/api";

import icon from "./assets/icon.png";

export default function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await getProducts();
      setProductos(response);
    }
    fetchProductos();
    console.log(productos.data.length);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 128, height: 128 }} />
      <Text>Productos disponibles:</Text>
      <ScrollView>
        {productos.data &&
          productos.data.map((producto) => (
            <Text key={producto.id}>
              {producto.id} - {producto.nombre} - ${producto.precio_promedio}
            </Text>
          ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff" /*#1976d2*/,
    alignItems: "center",
    justifyContent: "center",
  },
  btnPpal: {
    backgroundColor: "#1976d2",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
