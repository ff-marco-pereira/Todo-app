import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {TodoItem} from '../todo-item/todo-item.component';
import styles from './todo-list.styles';

interface Props extends Partial<FlatListProps<string>> {}

const TodoList: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: string}) => <TodoItem todo={item} />;

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

export default TodoList;
