import { Text, Image } from "react-native";

export function ProductCard({ producto }) {
  return (
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
  );
}
