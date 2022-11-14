import React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFirestore, collection, getDocs, doc} from 'firebase/firestore';

import cadastroAluno from './components/cadastroAluno';
import cadastroDisciplina from './components/cadastroDisciplina';
import cadastroProfessor from './components/cadastroProfessor';
import cadastroTurma from './components/cadastroTurma';
import historico from './components/historico';
import db from './src/config.js';






const collecRef = collection(db, 'Aluno');
const Pilha = createNativeStackNavigator();


function telaCadastro(props) {
  return (
    <View>
      <Button title='Cadastro Aluno' onPress={()=>props.navigation.navigate('cadastroAluno')}/>
      <Button title='Cadastro Disciplina' onPress={()=>props.navigation.navigate('cadastroDisciplina')}/>
      <Button title='Cadastro Professor' onPress={()=>props.navigation.navigate('cadastroProfessor')}/>
      <Button title='Cadastro Turma' onPress={()=>props.navigation.navigate('cadastroTurma')}/>
      <Button title='Histórico' onPress={()=>props.navigation.navigate('historico')}/>
      <Text></Text>
    </View>
  );
}

export default function App(){
  return(
    <NavigationContainer independent={true}>
      <Pilha.Navigator>
        <Pilha.Screen name='telaCadastro' component={telaCadastro}/>
        <Pilha.Screen name='cadastroAluno' component={cadastroAluno}/>
        <Pilha.Screen name='cadastroDisciplina' component={cadastroDisciplina}/>
        <Pilha.Screen name='cadastroProfessor' component={cadastroProfessor}/>
        <Pilha.Screen name='cadastroTurma' component={cadastroTurma}/>
        <Pilha.Screen name='historico' component={historico}/>
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

