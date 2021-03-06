import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function SelectPlayer({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                onPress={() => {navigation.navigate('Wait1')}}>
                    <Text style={styles.jogador}>JOGADOR VS JOGADOR</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Game')}} >
                    <Text style={styles.jogador} >JOGADOR VS COM</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jogador: {
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white',
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    }
})