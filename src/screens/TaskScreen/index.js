import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/Container';
import CustomButton from '../../components/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTasks} from '../../store/taskStore/taskActions';

const TaskScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    const Task = tasks.find(task => task.ID === taskID);
    if (Task) {
      setTitle(Task.Title);
      setDesc(Task.Desc);
    }
  };

  const setTask = () => {
    if (title.length == 0) {
      Alert.alert('Warning!', 'Please write your task title.');
    } else {
      try {
        let Task = {
          ID: taskID,
          Title: title,
          Desc: desc,
        };
        const index = tasks.findIndex(task => task.ID === taskID);
        let newTasks = [];
        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = Task;
        } else {
          newTasks = [...tasks, Task];
        }
        AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            Alert.alert('Success!', 'Task saved successfully.');
            navigation.goBack();
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Container noTopInset>
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
          onPressFunction={setTask}
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
    height: 50,
  },
});
