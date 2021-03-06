import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from '../../style/Style'

export default function RandCard() {

    var [history, setHistory] = useState([])

    var rare = ['🔹', '💠', '💎']
    var randRare = Math.floor(Math.random() * rare.length)
    var myRare = rare[randRare]
    var [rarity, setRarity] = useState(0)

    var [strong, setStrong] = useState(0)
    var [fire, setFire] = useState(0)
    var [skill, setSkill] = useState(0)
    var [cont, setCont] = useState(0)

    var total = fire + strong + skill

    if (total == 0){
        total = ''
        fire = ''
        skill = ''
        strong = ''
        rarity = ''
        
    }

    function generateNew(){
       setStrong(Math.floor(Math.random() * 10))
        setFire(Math.floor(Math.random() * 10))
        setSkill(Math.floor(Math.random() * 10))
        setCont(cont + 1)
        setRarity(myRare)
        var adicionar = history.push(fire + strong + skill + " | ");
        if (history.length = 5){
            var deletar = history.shift();
        }
    }

    return (
        <View style={styles.backAll}>
            <View style={styles.card}>
                
                <Text style={styles.nameCard}> {rarity} Plays: {cont} </Text>

                <View>
                   <Text style={styles.total}>{total}</Text>
                </View>

                <View style={{marginBottom: 10}}>
                    <Text style={styles.powerCard}>
                        Strong: {strong}
                </Text>
                    <Text style={styles.powerCard}>
                        Fire: {fire}
                </Text>
                    <Text style={styles.powerCard}>
                        Skill: {skill}
                </Text>
                </View>
                <Text style={{color: 'black'}}>Latests: </Text>
                <Text style={styles.histo}>{history}</Text>

            </View>

            

            <TouchableOpacity style={styles.btn}
            onPress={() => generateNew() }>
                <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons name="numeric-1-box-multiple" size={24} color="#6a6cff"  style={styles.backBtn} />
                    <Text style={styles.txt}>GENERATE CARD</Text>
                </View>
            </TouchableOpacity>    
        </View>
    )
}