import React, { useState } from 'react'
import {View, Text, TextInput , StyleSheet, Image, TouchableOpacity} from 'react-native';
import { agregarUsuario } from './firebase/firebase';
function crearCuenta({navigation}) {
  const [nombre,setNombre] = useState((""));
  const [correo,setCorreo] = useState((""));
  const [contraseña,setContraseña] = useState((""));
  const [confirm, setConfirm] = useState((""));

  const crearCuenta = () => {
    if(contraseña === confirm){

      alert("Cuenta agregada exitosamente")
      agregarUsuario(nombre, correo, contraseña).then(() => {
        navigation.navigate("iniciarSesion");
      });
    } else {
      alert("Las contraseñas no coinciden");
    }
  };


  return (
    <View>
      <View style={styles.logoContainer}>
        <Image source={require("./assets/logo_fruit-removebg-preview.png")} style={styles.logo} />
      </View>
      <View style={styles.headerContainer}>
        <Image source={require("./assets/img_fondo.jpg")}  />
      </View>
      <View style={styles.form}>
        <Text>Crear cuenta</Text>
        <TextInput onChangeText={setNombre} placeholder="Nombre" />
        <TextInput onChangeText={setCorreo} placeholder="Correo electrónico" />
        <TextInput onChangeText={setContraseña} placeholder="Contraseña" />
        <TextInput onChangeText={setConfirm} placeholder="Confirmar contraseña" />
        <TouchableOpacity style={styles.button} onPress={() => {crearCuenta()}}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </View >
    </View>
  )
}
const styles = StyleSheet.create({
  form:{
    alignItems: 'center',
    backgroundColor: '#837B7B',
    marginTop: 200,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    overflow: 'hidden',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 200,
    zIndex: -1,
  },
  footer: {
    marginTop: 20,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  link: {
    color: '#FFF',
    textDecorationLine: 'underline',
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    right: 1,
    opacity: 0.5,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    backgroundColor: '#D9D9D9',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 15,
    marginBottom: 10,
    padding: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  button: {
    width: 200,
    height: 40,
    backgroundColor: '#871F1F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
export default crearCuenta
