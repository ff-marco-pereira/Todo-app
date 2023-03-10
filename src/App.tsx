/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Button from './components/button/button.component';
import Input from './components/Input/input.component';
import Title from './components/title/title.component';
import {
  TodoItem,
  TodoItemProps,
} from './components/todo-item/todo-item.component';
import TodoList from './components/todo-list/todo-list.component';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#333',
    flex: 1,
  };

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<string[]>([]);

  const handleChange = (text: string) => {
    setTodo(text);
  };

  const Addtodo = () => {
    if (!todo) {
      return;
    }

    setTodos([...todos, todo]);
    setTodo('');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{padding: 24}}>
        <Title />
        <Input onChangeText={handleChange} value={todo} />
        <Button text="Add Todo" onPress={Addtodo} />
        <TodoList data={todos} />
      </View>
    </SafeAreaView>
  );
};

export default App;
