import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const TodoScreen = ({navigation}) => {
  return (
    <Container>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Task');
          }}>
          <FontAwesome5Icon name={'plus'} size={20} color={'#ffffff'} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 5,
  },
});
