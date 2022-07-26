import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

const MealDetailScreen = ({route}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return (
    <View style={styles.container}>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
      />

      <Subtitle>Ingredians</Subtitle>
      <List selectedMeal={selectedMeal.ingredients} />
      <Subtitle>Steps</Subtitle>
      <List selectedMeal={selectedMeal.steps} />
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    margin: 8,
  },
  subtitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
  },
});
