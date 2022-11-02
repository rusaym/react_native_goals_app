import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput({ addGoalHandler }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText)
  }

  const onAddGoal = () => {
    addGoalHandler(enteredGoalText)
    setEnteredGoalText('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={enteredGoalText}
        placeholder='Your course goal!'
        style={styles.textInput}
        onChangeText={goalInputHandler}
      />
      <Button title='Add Goal' onPress={onAddGoal} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
})
