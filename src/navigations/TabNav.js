import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabItem from '../components/TabItems';
import {Platform} from 'react-native';
import TodoScreen from '../screens/TodoScreen';
import DoneScreen from '../screens/DoneScreen';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: Platform.OS === 'android' ? 60 : 80,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Todo"
        component={TodoScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabItem focused={focused} icon="clipboard-list" label={'Todo'} />
            );
          },
        }}
      />

      <Tab.Screen
        name="Done"
        component={DoneScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                focused={focused}
                icon="clipboard-check"
                label={'Done'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
