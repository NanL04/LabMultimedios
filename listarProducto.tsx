import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { obtenerProductos } from './firebase/firebase';
export default function listarProducto() {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos().then((productos) => {
      setProductos(productos);
    });
  }, [])
  return (
    <View>
      {productos.map((producto) => {
        return (
          <View key={producto.id}>
            <Text>{producto.nombre}</Text>
            <Text>{producto.codigo}</Text>
            <Text>{producto.cantidad}</Text>
            <Text>{producto.caducidad}</Text>
          </View>
        )
      })}
    </View>
  )
}
