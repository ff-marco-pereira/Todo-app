import React from 'react';
import {Text, View} from 'react-native';
import styles from './title.styles';

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <Text style={styles.subtitle}>Organize your life</Text>
    </View>
  );
};

export default Title;
