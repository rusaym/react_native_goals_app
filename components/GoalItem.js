import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function GoalItem({ itemData, deleteGoalHandler }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#dddddd' }}
        onPress={() => deleteGoalHandler(itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#5e0acc',
  },

  pressedItem: {
    opacity: 0.5,
  },

  goalText: {
    padding: 16,
    color: 'white',
  },
})
