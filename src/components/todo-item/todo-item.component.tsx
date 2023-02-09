import React from 'react';
import {Text, View} from 'react-native';
import styles from './todo-item.styles';

export interface TodoItemProps {
  todo: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  return (
    <View style={styles.container}>
      <Text>{todo}</Text>
    </View>
  );
};
