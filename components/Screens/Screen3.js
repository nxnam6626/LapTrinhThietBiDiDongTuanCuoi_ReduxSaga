// screens/AddTaskScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function AddTaskScreen({ navigation, route }) {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const editingTask = route.params?.task;

  useEffect(() => {
    if (editingTask) {
      setTaskTitle(editingTask.title);
    }
  }, [editingTask]);

  const handleFinish = () => {
    if (taskTitle.trim()) {
      if (editingTask) {
        dispatch(updateTask({ ...editingTask, title: taskTitle }));
      } else {
        dispatch(addTask(taskTitle));
      }
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>ADD YOUR JOB</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Input your job"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={handleFinish}
      >
        <Text style={styles.buttonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={require('../../assets/snack-icon.png')}
        style={styles.illustration}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#06B6D4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  illustration: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 40,
  },
});