import React from "react";

import {View, Text, StyleSheet} from 'react-native'


type props = {
    text : string
}

const Task = (props: props) => {



    return (
        <View style={styles.taskContainer}>
            <View style={styles.itemLeft}>
                <View style={styles.square} ></View>
                <Text style={styles.taskText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
            
    )
}


const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',    
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 15,
        padding: 15,
        borderRadius: 30,
    },
    itemLeft: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    square : {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.7,
        marginRight: 15,
        marginTop: 2,
        
    },
    taskText: {
        fontSize: 20,
    },
    circle: {
        justifyContent: 'center',
        width: 10,
        height: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#55BCF6'
    }
})

export default Task;