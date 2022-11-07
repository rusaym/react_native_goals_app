import { useState } from 'react'
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({
  addGoalHandler,
  modalIsVisible,
  endAddGoalHandler,
}) {
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
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          value={enteredGoalText}
          placeholder='Your course goal!'
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={endAddGoalHandler}
              color='#f31282'
            />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={onAddGoal} color='#5e0acc' />
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
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '100%',
    padding: 16,
    borderRadius: 6,
  },

  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
  image: {
    width: 150,
    height: 150,
  },
})
