
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { obtenerFrutas } from './api/fruityvice';

export default function AprenderMas() {
  const route = useRoute();
  const usuario = route.params.usuario;
  const [frutas, setFrutas] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  
  useEffect(() => {
    obtenerFrutas().then(setFrutas);
  }, []);

  const agregarOQuitarFavorito = (frutaId) => {
    if (favoritos.includes(frutaId)) {
      setFavoritos(favoritos.filter((favorito) => favorito !== frutaId));
    } else {
      setFavoritos([...favoritos, frutaId]);
    }
  };

  return (
    <View>
      {frutas.map((fruta) => (
        <View key={fruta.id}>
          <Text>{fruta.name}</Text>
          <Text>{fruta.genus}</Text>
          <Text>{fruta.family}</Text>
          <TouchableOpacity onPress={() => agregarOQuitarFavorito(fruta.id)}>
            {favoritos.includes(fruta.id) ? (
              <Icon name="heart" size={30} color="#000" />
            ) : (
              <Icon name="heart-outline" size={30} color="#000" />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

