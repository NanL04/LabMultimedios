import React, { useState } from 'react'
import addData from "./firebase/add";

import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

function agregarProducto() {
  const [nombre,setNombre] = useState((""));
  const [codigo,setCodigo] = useState((""));
  const [cantidad,setCantidad] = useState((""));
  const [caducidad,setCaducidad] = useState((""));
  const subirProducto = () => {
    addData("productos", {nombre, codigo, cantidad, caducidad});
  }
  return (
    <View>
      <TextInput onChangeText={setNombre} placeholder="Nombre" />
      <TextInput onChangeText={setCodigo} placeholder="Codigo" />
      <TextInput onChangeText={setCantidad} placeholder="Cantidad" />
      <TextInput onChangeText={setCaducidad} placeholder="Caducidad" />
      <TouchableOpacity onPress={subirProducto}>
        <Text>Subir producto</Text>
      </TouchableOpacity>
    </View>
  )
}

export default agregarProducto
