import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import iniciarSesion from "./iniciarSesion";
import crearCuenta from "./crearCuenta";
import agregarProducto from "./agregarProducto";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="iniciarSesion">
        <Stack.Screen name="iniciarSesion" component={iniciarSesion} options={{ headerShown: false }} />
        <Stack.Screen name="crearCuenta" component={crearCuenta} options={{ headerShown: false }} />
        <Stack.Screen name="agregarProducto" component={agregarProducto} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
