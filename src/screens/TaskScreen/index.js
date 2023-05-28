import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';

const TaskScreen = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <Container>
      <View style={styles.container}>
        <TextInput
          value={title}
          style={styles.input}
          placeholder="Title"
          onChangeText={value => setTitle(value)}
        />
        <TextInput
          value={desc}
          style={styles.input}
          placeholder="Description"
          multiline
          onChangeText={value => setDesc(value)}
        />
        <CustomButton
          title="Save Task"
          color="#1eb900"
          style={{width: '100%'}}
          // onPressFunction={setTask}
        />
      </View>
    </Container>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },
});
