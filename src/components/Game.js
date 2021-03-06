import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

import stylesAll from '../../style/Style'

export default function Game() {

  const [ponto, setPonto] = useState([]);
  const [click, setClick] = useState(0)
  const [newPonto, setNewPonto] = useState(click)

  function clicado() {
    setClick(click + 1)
    setNewPonto(click + 1)
  }

  async function addPonto() {

    if (click < ponto) {
      Alert.alert(
        'ERRO',
        'A pontuação não é maior'
      )
    } else {
      Alert.alert(
        'SALVO',
        'Sua pontuação de ' + newPonto + ' foi salva'
      )
      setPonto([newPonto]);
      setNewPonto(click)
    }
    // setPonto([...ponto, newPonto]);
    // setNewPonto(" " + pnts + ', ');
  }

  useEffect(() => {
    async function carregaDados() {
      const ponto = await AsyncStorage.getItem("ponto");

      if (ponto) {
        setPonto(JSON.parse(ponto));
      }
    }
    carregaDados();
  }, []);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("ponto", JSON.stringify(ponto));
    }
    salvaDados();
  }, [ponto]);

  async function deletePontos() {

    Alert.alert(
      "Deletar Clicks",
      "Tem certeza que deseja remover seus clicks ?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => {
            setPonto([]);
            setClick(0)
            setNewPonto(0);
          }
        }
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={stylesAll.backAll}>
    
      <Text>
  <Ionicons name="logo-bitcoin" size={35} color="black" />
    <Text style={{fontSize: 35}}>{ponto}</Text>
    </Text>

      <TouchableOpacity
        onPress={(valor) => clicado()}>
        <Text style={styles.clicado}>{click}</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        onPress={() => addPonto()}>
        <Ionicons name="save" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clicado: {
    fontSize: 50,
    backgroundColor: '#6a6cff',
    color: 'white',
    padding: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 3,
    marginVertical: 50,
  }
});