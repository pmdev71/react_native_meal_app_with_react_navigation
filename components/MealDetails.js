import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MealDetails = ({affordability, complexity, duration}) => {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>{duration}m</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
