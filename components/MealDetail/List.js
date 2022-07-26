import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const List = ({selectedMeal}) => {
  return (
    <View>
      {selectedMeal.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
