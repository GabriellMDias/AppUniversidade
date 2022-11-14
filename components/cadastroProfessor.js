import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getFirestore, collection, getDocs, addDoc,setDoc, doc} from 'firebase/firestore';
import db from '../src/config.js'



const collecRef = collection(db, 'Professor');

export default function cadastroProfessor() {

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");

  return(
    <View>
      <TextInput 
        value={nome}
        placeholder = "Nome"
        onChangeText={(text) => {setNome(text)}}
      />

      <TextInput 
        value={endereco}
        placeholder = "Endereço"
        onChangeText={(text) => {setEndereco(text)}}
      />
      <TextInput
        value={cidade}
        placeholder = "Cidade"
        onChangeText={(text) => {setCidade(text)}}
      />

      <Button title='Salvar' onPress={() => {addDoc(collecRef, {
        Cidade: cidade,
        Endereco: endereco,
        cod_prof: 1,
        Nome: nome
      })
      alert("Professor Cadastrado!")
      }}/>
    </View>
  );
}