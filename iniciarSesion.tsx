
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function iniciarSesion( {navigation}) {
  return (
    <ImageBackground source={require('./assets/img_fondo.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/logo_fruit-removebg-preview.png')} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="mail-outline" size={30} color="#000" />
          <TextInput style={styles.input} placeholder="Correo electrónico" placeholderTextColor="#666" />
        </View>
        <View style={styles.inputContainer}>
          <Icon style={styles.icon} name="lock-closed-outline" size={30} color="#000" />
          <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#666" secureTextEntry={true} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("agregarProducto")}}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.text}>
            Crear una cuenta nueva 
            <TouchableOpacity onPress={() => navigation.navigate("crearCuenta")}>
              <Text style={styles.link}> Regístrate </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña presionado')}>
              <Text style={styles.link}> ¿Olvidaste tu contraseña? </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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

export default iniciarSesion;

