import React from 'react';
import { View,Text,Image,Button,TouchableOpacity, TextInput } from 'react-native-web';

const Greetings = ({name}) => {
  return (
    <View style={{  alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Bem-vindo, {name}</Text>
    </View>
  );

  };

export default function lotsOfGreetings() {
     let img = 'https://lh3.googleusercontent.com/ogw/AF2bZyh_OHh8BX8Zxq11vuWKFRiR0WW6S0pbBtCnEUGjwGx94a-a=s64-c-mo';
  return (
    <View style={{ marginLeft: 100,alignItems: 'center ', top: 100 }}>
       <Greetings name="Hebert" />
       <Image
        source={{
          uri: img,
        }}
        style={{ width: 100, height: 100, borderRadius: 50 , marginTop: 20 }}
        /> 
        <button style={{width: 100, height:30, margintop: 200, backgroundColor: 'blue', color: 'white', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: 15, marginTop: 20, padding: 5, textAlign: 'center'}} 
         title='test' onClick={() => alert('Hello')}> Curtir
         </button>
         <TouchableOpacity style={{width: 100, height:30, marginTop: 20, backgroundColor: 'red', color: 'white', borderRadius: 5, border: 'none', cursor: 'pointer', fontSize: 15, marginTop: 20, padding: 5, textAlign: 'center'}}
         title='test2' onClick={() => alert('testando o 2')}> Descurtir
         </TouchableOpacity>
          <Text style={{ fontSize: 12, marginTop: 20 }}>Digite seu nome</Text>
         <TextInput
         style={{width: 200, height:30, marginTop: 10, backgroundColor: 'White', color: 'black', borderRadius: 5, border: '1', cursor: 'pointer', fontSize: 15, marginTop: 20, padding: 5, textAlign: 'center'}}
         title='nome'
         placeholder='Seu nome aqui!!'
         keyboardType='number-pad'
      
         />
        
        
    
       
    </View>
  );
}
