import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  todo: string;
}

export const TodoItem: React.FC<Props> = ({todo}) => {
  return (
    <View>
      <Text>{todo}</Text>
    </View>
  );
};
