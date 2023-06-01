import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants/colors';

const TabItem = ({focused, icon, label}) => {
  return (
    <View style={styles.tabContainer}>
      <FontAwesome5
        name={icon}
        size={focused ? 25 : 20}
        color={focused ? '#0080ff' : '#777777'}
      />
      <Text
        style={[styles.tabIconLabel, {color: focused ? '#0080ff' : '#777777'}]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  tabIconLabel: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default TabItem;
