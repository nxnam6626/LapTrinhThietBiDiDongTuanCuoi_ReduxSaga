import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Screen3 = ({ navigation }) => {
  const [job, setJob] = useState('');

  const handleFinish = () => {
    // Xử lý logic thêm công việc
    // Quay lại màn hình trước hoặc lưu công việc mới vào danh sách
    navigation.goBack();
  };

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

      <Text style={styles.title}>ADD YOUR JOB</Text>

      <TextInput
        style={styles.input}
        placeholder="Input your job"
        placeholderTextColor="#a1a1a1"
        value={job}
        onChangeText={setJob}
      />

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image
        source={{ uri: 'https://i.imgur.com/your-image-url.png' }} // thay bằng link hình ảnh ghi chú và bút
        style={styles.noteImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 40,
    left: 20,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    marginTop: 80,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  finishButton: {
    backgroundColor: '#00c6d3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 20,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  noteImage: {
    width: 120,
    height: 120,
    marginTop: 20,
    resizeMode: 'contain',
  },
});

export default Screen3;
