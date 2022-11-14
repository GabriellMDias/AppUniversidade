import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList, Image} from 'react-native';
import {getFirestore, collection, getDocs, addDoc,setDoc, doc} from 'firebase/firestore';
import db from '../src/config.js'

const collecRef = collection(db, 'Aluno');

export default function cadastroAluno() {

  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [foto,setFoto] = useState("");
  const [dados, setDados] = useState([]);

  useEffect(
    ()=>{
      getDados();
    },[]
  );

  const getDados = async ()=>{
    getDocs(collecRef).then((snapshot)=>{
      for(let i = 0 ; i < snapshot.docs.length;i++){
        const newData = [...dados,{
          Matricula: snapshot.docs[i].get('Matricula'), 
          Nome: snapshot.docs[i].get('Nome'), 
          Cidade: snapshot.docs[i].get('Cidade'), 
          Endereco: snapshot.docs[i].get('Endereco'), 
          Foto: snapshot.docs[i].get('Foto')}];
        setDados(dados.push(newData))
        }
      console.log(dados);
    })
    .catch((err) => {
      console.log(err.message )
    })
  }

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.Matricula} - {item.Nome} - {item.Cidade} - {item.Endereco}</Text>
      <Image
                style={{width:100, height:100}}
                source={{uri:item.Foto}}
            />
    </View>
  );

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
      <TextInput 
        value={foto}
        placeholder = "Link da foto"
        onChangeText={(text) => {setFoto(text)}}
      />

      <Button title='Salvar' onPress={() => {addDoc(collecRef, {
        Cidade: cidade,
        Endereco: endereco,
        Foto: foto,
        Matricula: 1,
        Nome: nome
      })
      alert("Aluno Cadastrado!")
      }}/>

      <FlatList
        data={dados}
        renderItem={renderItem}
        keyExtractor={item => item.Matricula}
      />
      
    </View>
  );
}