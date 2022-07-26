import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontSize: 20,
                color: 'red',
              },
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
              options={{
                title: 'Meals Overview',
              }}
            />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetailScreen"
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24180f',
  },
});

export default App;
