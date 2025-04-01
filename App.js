import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, TextInput, StyleSheet } from 'react-native-web';
import Ionicons from '@expo/vector-icons/Ionicons';

const Greetings = ({ name }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Bem-vindo, {name}</Text>
    </View>
  );
};

export default function LotsOfGreetings() {
  const [count, setCount] = useState(0);
  let img = 'https://lh3.googleusercontent.com/ogw/AF2bZyh_OHh8BX8Zxq11vuWKFRiR0WW6S0pbBtCnEUGjwGx94a-a=s64-c-mo';

  function curtir() {
    setCount(count + 1);
  }

  function descurtir() {
    if (count > 0) { // Evita números negativos
      setCount(count - 1);
    }
  }

  return (
    <View style={{ marginLeft: 100, alignItems: 'center', top: 100 }}>
      <Greetings name="Hebert" />
      <Image
        source={{ uri: img }}
        style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }}
      />
      <Button title="Curtir" onPress={curtir} />

      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <Ionicons name="heart" size={24} color="red" />
        <Text style={{ fontSize: 18, marginTop: 1, paddingHorizontal: 10 }}>{count} curtidas</Text>
      </View>

      <TouchableOpacity
        style={styles.descurtirButton}
        onPress={descurtir}
      >
        <Text style={styles.descurtirText}>Descurtir</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 12, marginTop: 20 }}>Digite seu nome</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu nome aqui!!"
        keyboardType="default"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  descurtirButton: {
    width: 100,
    height: 40,
    marginTop: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descurtirText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    width: 200,
    height: 40,
    marginTop: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    textAlign: 'center',
  },
});