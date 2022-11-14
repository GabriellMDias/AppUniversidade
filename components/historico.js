import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {getFirestore, collection, getDocs, addDoc,setDoc, doc} from 'firebase/firestore';
import db from '../src/config.js'



const collecRef = collection(db, 'Historico');

export default function cadastroHistorico() {
  const [matricula, setMatricula] = useState("");
  const [codTurma, setCodTurma] = useState("");
  const [frequencia, setFrequencia] = useState("");
  const [nota, setNota] = useState("");
  

  return(
    <View>
      <TextInput 
        value={matricula}
        placeholder = "Matrícula"
        onChangeText={(text) => {setMatricula(text)}}
      />

      <TextInput 
        value={codTurma}
        placeholder = "Código da Turma"
        onChangeText={(text) => {setCodTurma(text)}}
      />
      <TextInput
        value={frequencia}
        placeholder = "Frequência"
        onChangeText={(text) => {setFrequencia(text)}}
      />
      <TextInput
        value={nota}
        placeholder = "Nota"
        onChangeText={(text) => {setNota(text)}}
      />

      <Button title='Salvar' onPress={() => {addDoc(collecRef, {
        cod_historico: 1,
        cod_turma: codTurma,
        frequencia: frequencia,
        matricula: matricula,
        nota: nota
      })
      alert("Histórico Cadastrado!")
      }}/>
    </View>
  );
}

/*export default function historico() {
  return(
    <View>
      <TextInput placeholder = "Código Histórico"/>
      <TextInput placeholder = "Matrícula"/>
      <TextInput placeholder = "Código Turma"/>
      <TextInput placeholder = "Frequência"/>
      <TextInput placeholder = "Nota"/>
      

      <Button title='Salvar'/>
    </View>
  );
}*/