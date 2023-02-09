import React, {FC} from 'react';
import {TextInput, View, TextInputProps} from 'react-native';
import styles from './input.styles';

interface Props extends TextInputProps {}

const Input: FC<Props> = ({onChange}) => {
  return (
    <View style={styles.container}>
      <TextInput onChange={onChange} style={styles.input} />
    </View>
  );
};

export default Input;
