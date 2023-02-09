import React, {FC} from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import styles from './input.styles';

interface Props extends TextInputProps {}

const Input: FC<Props> = ({onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        style={styles.input}
        value={value}
      />
    </View>
  );
};

export default Input;
