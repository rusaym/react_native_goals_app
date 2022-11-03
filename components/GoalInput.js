import { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({ addGoalHandler, modalIsVisible }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const onAddGoal = () => {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <Modal visible={modalIsVisible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 8,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
})
