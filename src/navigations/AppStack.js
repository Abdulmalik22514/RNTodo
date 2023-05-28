import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import HomeTabs from './TabNav';
import TaskScreen from '../screens/TaskScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="MyTasks" component={HomeTabs} />
      <Stack.Screen name="Task" component={TaskScreen} />
    </Stack.Navigator>
  );
};

// const Tabs = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="AllBreeds"
//       screenOptions={{
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           backgroundColor: '#E3E3E3',
//           height: Platform.OS === 'android' ? 60 : 80,
//         },
//         headerShown: false,
//       }}>
//       <Tab.Screen
//         name="AllBreeds"
//         component={MyStack}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return <TabItem focused={focused} icon="folder" label={'Home'} />;
//           },
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabItem focused={focused} icon="person" label={'Profile'} />
//             );
//           },
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

export default AppStack;
