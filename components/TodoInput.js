import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import { useAppContext } from '../context/app.context'

export default function TodoInput(params) {
  const { todos, dispatch } = useAppContext()
  const [ input, setInput ] = useState('')
  return (
    <View style={styles.container}>
      <TextInput onChange={e => setInput(e.nativeEvent.text)} style={styles.input} placeholder="Enter todo here" />
      <Button onPress={() => dispatch({type: 'setTodo', payload: {id: Math.random().toString(), title: input}})} style={styles.button} title="Add todo" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 40
  },
  input: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: 'red',
    padding: 16,
    fontSize: 18,
    width: "80%"
  }
});