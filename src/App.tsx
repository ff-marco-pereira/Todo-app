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
import {
  NativeSyntheticEvent,
  SafeAreaView,
  StatusBar,
  Text,
  TextInputChangeEventData,
  View,
} from 'react-native';
import Input from './components/Input/input.component';
import Title from './components/title/title.component';

const App = () => {
  const backgroundStyle = {
    backgroundColor: '#333',
    flex: 1,
  };

  const [todo, setTodo] = useState('');

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTodo(e.nativeEvent.text);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{padding: 24}}>
        <Title />
        <Input onChange={handleChange} value={todo} />
      </View>
    </SafeAreaView>
  );
};

export default App;
