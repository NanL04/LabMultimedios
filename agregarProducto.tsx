import React, { useState } from 'react'
import { agregarProductos } from './firebase/firebase';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';

function agregarProducto() {
  const [nombre,setNombre] = useState((""));
  const [codigo,setCodigo] = useState((""));
  const [cantidad,setCantidad] = useState((""));
  const [caducidad,setCaducidad] = useState((""));
  const subirProducto = () => {
    agregarProductos(nombre, codigo, cantidad, caducidad).then(() => {
      alert("Producto subido exitosamente");
      setNombre("");
      setCodigo("");
      setCantidad("");
      setCaducidad("");
    });
  }
 
  return (
    <View>
      <Text>Registrar producto</Text>
      <TextInput onChangeText={setNombre} placeholder="Nombre" />
      <TextInput onChangeText={setCodigo} placeholder="Codigo" />
      <TextInput onChangeText={setCantidad} placeholder="Cantidad" />
      <TextInput onChangeText={setCaducidad} placeholder="Caducidad" />
      <TouchableOpacity onPress={subirProducto} >
        <Text>Subir producto</Text>
      </TouchableOpacity>
    </View>
  )
}

export default agregarProducto
