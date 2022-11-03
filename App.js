import { useState } from 'react'
import { StyleSheet, View, FlatList, Button, Pressable } from 'react-native'
import GoalInput from './components/GoalInput'
import GoalItem from './components/GoalItem'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const startAddGoalHandler = () => {
    setModalIsVisible(true)
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((item) => item.id !== id)
    )
  }

  return (
    <View style={styles.appContainer}>
      <Pressable>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
      </Pressable>

      <GoalInput
        addGoalHandler={addGoalHandler}
        modalIsVisible={modalIsVisible}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, index) => index}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              deleteGoalHandler={deleteGoalHandler}
            />
          )}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
})
