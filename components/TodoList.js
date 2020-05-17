import React from 'react'
import { FlatList, Text, View } from 'react-native'
import {useAppContext} from '../context/app.context'

function Item({ key, title }) {
  return <View>
    <Text>{title}</Text>
  </View>
}

export default function TodoList(params) {
  const { todos } = useAppContext()
  console.log(todos)
  return (
    <FlatList
      ListHeaderComponent={<Text>Header list</Text>}
      data={todos}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      ListFooterComponent={<Text>Footer list</Text>}
    />
  )
}