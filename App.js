import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native-web';

const Greetings = ({ name }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Bem-vindo, {name}</Text>
    </View>
  );
};

export default function LotsOfGreetings() {
  const [count, setCount] = useState(0);
  const [msg, setmsg] = useState('');
  
  // Imagem de exemplo
  const img = 'https://lh3.googleusercontent.com/ogw/AF2bZyh_OHh8BX8Zxq11vuWKFRiR0WW6S0pbBtCnEUGjwGx94a-a=s64-c-mo';

  const curtir = () => {
    console.log('Curtir clicado'); // Para debug
    setCount(prevCount => prevCount + 1);
  };
  useEffect(() => {
    console.log('Contador atualizado:', count); // Para debug
  }, [count]);
  // Função para descurtir

  const descurtir = () => {
    console.log('Descurtir clicado'); // Para debug
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <View style={{ marginLeft: 100, alignItems: 'center', top: 100 }}>
      <Greetings name="Hebert" />
      <Image
        source={{ uri: img }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
      />
      
      {/* Botão Curtir - maior e com mais margem */}
      <TouchableOpacity
        style={[styles.button, styles.curtirButton]}
        onPress={curtir}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>

      <View style={styles.likesContainer}>
        <Text style={styles.heartIcon}>♥</Text>
        <Text style={styles.likesCount}>{count} curtidas</Text>
      </View>

      {/* Botão Descurtir - mesmo estilo do curtir mas vermelho */}
      <TouchableOpacity
        style={[styles.button, styles.descurtirButton]}
        onPress={descurtir}
      >
        <Text style={styles.buttonText}>Descurtir</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Digite seu nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui!!"
        keyboardType="default"
      />
      <Text style={styles.label}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,  // Largura aumentada
    height: 45,  // Altura aumentada
    marginTop: 25,  // Margem superior aumentada
    borderRadius: 8,  // Bordas mais arredondadas
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  curtirButton: {
    backgroundColor: '#4CAF50',  // Verde mais bonito
  },
  descurtirButton: {
    backgroundColor: '#F44336',  // Vermelho mais bonito
    marginTop: 15,  // Margem menor que o botão curtir
  },
  buttonText: {
    color: 'white',
    fontSize: 16,  // Texto um pouco maior
    fontWeight: 'bold',
  },
  likesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  heartIcon: {
    fontSize: 28,  // Ícone maior
    color: 'red',
    marginRight: 10,  // Espaçamento do ícone
  },
  likesCount: {
    fontSize: 18,
  },
  label: {
    fontSize: 14,
    marginTop: 25,
    color: '#555',
  },
  input: {
    width: 220,  // Largura aumentada
    height: 45,  // Altura aumentada
    marginTop: 15,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 8,  // Bordas mais arredondadas
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});