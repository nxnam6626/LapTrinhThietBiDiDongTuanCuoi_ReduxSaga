// screens/TaskListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from '../actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TaskListScreen({ navigation }) {
  const { userName, tasks } = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <TouchableOpacity 
        style={styles.checkbox}
        onPress={() => dispatch(toggleTask(item.id))}
      >
        {item.completed && <Icon name="check" size={20} color="#06B6D4" />}
      </TouchableOpacity>
      <Text style={[
        styles.taskText,
        item.completed && styles.completedTask
      ]}>
        {item.title}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddTask', { task: item })}
      >
        <Icon name="edit" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Icon name="account-circle" size={40} color="#8B5CF6" />
          <View style={styles.userText}>
            <Text style={styles.greeting}>Hi {userName}</Text>
            <Text style={styles.subtitle}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userText: {
    marginLeft: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
  list: {
    flex: 1,
    padding: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#06B6D4',
    borderRadius: 12,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#06B6D4',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});