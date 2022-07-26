import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Subtitle = ({children}) => {
  return (
    <View>
      <Text style={[styles.subtitle, styles.subtitleContainer]}>
        {children}
      </Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
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
