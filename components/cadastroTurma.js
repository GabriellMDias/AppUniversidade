import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getFirestore, collection, getDocs, addDoc,setDoc, doc} from 'firebase/firestore';
import db from '../src/config.js'



const collecRef = collection(db, 'Turma');

export default function cadastroTurma() {

  const [ano, setAno] = useState("");
  const [codProf, setCodProf] = useState("");
  const [codDisc, setCodDisc] = useState("");
  const [horario, setHorario] = useState("");

  return(
    <View>
      <TextInput 
        value={codDisc}
        placeholder = "Código da Disciplina"
        onChangeText={(text) => {setCodDisc(text)}}
      />

      <TextInput 
        value={codProf}
        placeholder = "Código do Professor"
        onChangeText={(text) => {setCodProf(text)}}
      />
      <TextInput
        value={ano}
        placeholder = "Ano"
        onChangeText={(text) => {setAno(text)}}
      />
      <TextInput
        value={horario}
        placeholder = "Horário"
        onChangeText={(text) => {setHorario(text)}}
      />

      <Button title='Salvar' onPress={() => {addDoc(collecRef, {
        ano: ano,
        cod_disc: codDisc,
        cod_prof: codProf,
        cod_turma: 1,
        horario: horario
      })
      alert("Turma Cadastrada!")
      }}/>
    </View>
  );
}