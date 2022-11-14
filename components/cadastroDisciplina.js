import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getFirestore, collection, getDocs, addDoc,setDoc, doc} from 'firebase/firestore';
import db from '../src/config.js'

const collecRef = collection(db, 'Disciplina');

export default function cadastroDisciplina() {
  const [nomeDisc, setNomeDisc] = useState("");
  const [cargaHor, setCargaHor] = useState("");

  return(
    <View>
      <TextInput 
        value={nomeDisc}
        placeholder = "Nome da Disciplina"
        onChangeText={(text) => {setNomeDisc(text)}}
      />
      <TextInput 
        value={cargaHor}
        placeholder = "Carga Horária"
        onChangeText={(text) => {setCargaHor(text)}}
      />

<Button title='Salvar' onPress={() => {addDoc(collecRef, {
        carga_hor: cargaHor,
        cod_disc: 1,
        nome_disc: nomeDisc
      })
      alert("Disciplina Cadastrada!")
      }}/>
    </View>
  );
}