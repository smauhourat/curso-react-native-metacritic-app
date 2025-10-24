import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";

import icon from "../assets/icon.png";

export function Main() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchProductos() {
      const response = await getProducts();
      setProductos(response);
    }
    fetchProductos();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 128, height: 128 }} />
      <Text>Productos disponibles:</Text>
      <ScrollView>
        {productos.data &&
          productos.data.map((producto) => (
            <>
              <Image
                source={{
                  uri: `https://picsum.photos/200/300?random=${producto.id}`,
                }}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
              <Text key={producto.id}>
                {producto.id} - {producto.nombre} - ${producto.precio_promedio}
              </Text>
            </>
          ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    // backgroundColor: "#fff"
    /*#1976d2*/ alignItems: "center",
    justifyContent: "center",
  },
  btnPpal: {
    backgroundColor: "#1976d2",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
