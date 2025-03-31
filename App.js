import React from 'react';
import { View,Text,Image } from 'react-native-web';

const Greetings = ({name}) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Bem-vindo, {name}</Text>
    </View>
  );

  };

export default function lotsOfGreetings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
       <Greetings name="Hebert" />
    
       
    </View>
  );
}
