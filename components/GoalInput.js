import { TextInput, StyleSheet, View, Button, Modal, Image } from 'react-native'
import React, { useState } from 'react'

export default function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
       }

       function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
       }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/endsars-1.png')} />
                <TextInput style={styles.textInput} placeholder='Your course goal!' value={enteredGoalText} onChangeText={goalInputHandler}  />
                <View style={styles.buttonContainer}> 
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
        borderRadius: 6
      },
      buttonContainer: {
        flexDirection: 'row',
        marginTop: 16
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})
