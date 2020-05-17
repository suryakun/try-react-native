import React from 'react';
import { SafeAreaView, Text, View, FlatList, ScrollView } from 'react-native';
import { AppProvider } from './context/app.context'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

export default function App() {
  return (
    <AppProvider>
      <SafeAreaView>
        <View>
          <TodoInput />
          <ScrollView>
            <TodoList />
          </ScrollView>
        </View>
      </SafeAreaView>
    </AppProvider>
  );
}
