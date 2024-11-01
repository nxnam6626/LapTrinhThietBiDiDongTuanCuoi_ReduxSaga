import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Screen2 = ({ navigation }) => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'To check email', completed: true },
    { id: '2', text: 'UI task web page', completed: true },
    { id: '3', text: 'Learn JavaScript basic', completed: true },
    { id: '4', text: 'Learn HTML Advance', completed: true },
    { id: '5', text: 'Medical App UI', completed: false },
    { id: '6', text: 'Learn Java', completed: false },
  ]);
  const [searchText, setSearchText] = useState('');

  const renderTask = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={styles.taskContent}>
        <Ionicons
          name={item.completed ? 'checkbox' : 'square-outline'}
          size={24}
          color="green"
          style={styles.checkboxIcon}
        />
        <Text style={styles.taskText}>{item.text}</Text>
      </View>
      <View style={styles.actionIcons}>
        <View style={styles.priorityIndicator} />
        <TouchableOpacity>
          <MaterialIcons name="edit" size={24} color="#FF6347" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pravatar.cc/300' }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Hi Twinkle</Text>
          <Text style={styles.subGreeting}>Have a great day ahead</Text>
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
      />

      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerTextContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  subGreeting: {
    fontSize: 14,
    color: '#666',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  taskList: {
    flex: 1,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxIcon: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
  },
  actionIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityIndicator: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    marginRight: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00c6d3',
    borderRadius: 30,
    padding: 10,
  },
});

export default Screen2;
