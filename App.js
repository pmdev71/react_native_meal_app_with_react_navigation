import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import 'react-native-gesture-handler';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen
              name="MealsOverviewScreen"
              component={MealsOverviewScreen}
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
