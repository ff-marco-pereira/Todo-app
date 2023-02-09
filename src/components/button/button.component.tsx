import React from 'react';
import {Pressable, Text, PressableProps} from 'react-native';
import styles from './button.styles';

interface Props extends PressableProps {
  text: string;
}

const Button: React.FC<Props> = ({text, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export default Button;
