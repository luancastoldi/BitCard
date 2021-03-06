import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import styles from '../../style/Style'

export default function Home({ navigation }) {

  const bitPlay = () => {
    navigation.navigate("Game")
  }

  return (
    <View style={styles.backAll}>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => bitPlay()}>
        <View style={{ flexDirection: 'row' }}>
          <Ionicons name="logo-bitcoin" size={24} color="#6a6cff" style={styles.backBtn} />
          <Text style={styles.txt}>Bitcoin Clicker</Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.btn}
        onPress={() => { navigation.navigate('RandCard') }}>
        <View style={{ flexDirection: 'row' }}>
        <FontAwesome name="random" size={24} color="#6a6cff" style={styles.backBtn}  />
          <Text style={styles.txt}>Random Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

