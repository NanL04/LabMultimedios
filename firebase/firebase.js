import { collection, addDoc, onSnapshot, updateDoc, getDocs, doc , setDoc} from 'firebase/firestore';
import { db } from './config';

const agregarUsuario = async (nombre, email, contrasena) => {
  await setDoc(doc(db, 'usuarios', email), {
    nombre,
    email,
    contrasena,
    favoritos: []
  });
}

const obtenerUsuarios = async () => {
  const usuarios = [];
  const querySnapshot = await getDocs(collection(db, 'usuarios'));
  querySnapshot.forEach(doc => {
    usuarios.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return usuarios;
}
const agregarProductos = async (nombre, codigo, cantidad, caducidad) => {
  await setDoc(doc(db, 'productos', codigo), {
    nombre,
    codigo,
    cantidad,
    caducidad
  });
}
const obtenerProductos = async () => {
  const productos = [];
  const querySnapshot = await getDocs(collection(db, 'productos'));
  querySnapshot.forEach(doc => {
    productos.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return productos;
}

export { agregarUsuario, obtenerUsuarios, agregarProductos, obtenerProductos};
