import { View, Text, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import React from 'react'

export default function principal({navigation}) {
  const route = useRoute();
  const usuario = route.params.usuario;
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("agregarProducto")}>
        <Text>Registrar productos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("listarProducto")}>
        <Text>Listar producto</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("aprenderMas", {usuario: usuario})}>
        <Text>Aprender +</Text>
      </TouchableOpacity>
    </View>

  )
}
