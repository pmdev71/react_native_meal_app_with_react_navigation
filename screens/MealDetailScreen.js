import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import React, {useLayoutEffect} from 'react';

import {MEALS} from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';

const MealDetailScreen = ({route, navigation}) => {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const headerButtonPressHandler = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={{marginRight: 20}}>
            <Button title="Buy Me" onPress={headerButtonPressHandler} />
          </View>
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
        />
        <View style={{marginHorizontal: 10}}>
          <Subtitle>Ingredians</Subtitle>
          <List selectedMeal={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List selectedMeal={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    marginTop: 8,
    marginBottom: 18,
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
});
