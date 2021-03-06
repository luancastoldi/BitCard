import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    backAll: {
        backgroundColor: '#d3d4ff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn: {
        backgroundColor: '#6a6cff',
        width: 250,
        marginBottom: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: 'white',
    
    },
    txt: {
        fontSize: 20,
        color: 'white',
        padding: 10, 
        marginHorizontal: 15
    },
    backBtn: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 3,
    },
    card: {
        borderWidth: 4,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        flex: 1,
        width: 300,
        marginBottom: 40,
        marginTop: 40,
        backgroundColor: '#ffffff'
    },
    nameCard: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        backgroundColor: '#6a6cff',
        borderRadius: 10,
        padding: 5,
    },
    powerCard: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        backgroundColor: '#6a6cff',
        borderRadius: 4,
        padding: 2,
        marginTop: 10
    },
    total: {
        color: '#6a6cff',
        fontSize: 60,
        textAlign: 'center',
        marginVertical: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        borderRadius: 4,
    },
    histo: {
        
        borderRadius: 7,
        textAlign: 'center',
        color: 'white', 
        backgroundColor: '#6a6cff',
        fontSize: 30,        
    }
})

export default styles
