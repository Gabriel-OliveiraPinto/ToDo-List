import React, {useState} from 'react';

import {View, Text, StyleSheet, Keyboard, TouchableOpacity, KeyboardAvoidingView, TextInput} from 'react-native';

import Task from './components/Task';


function App() {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState<Array<string>>([])
  const [index, setIndex] = useState(0)
  const addTask = () => {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task])
      setTask('')
  }  
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
  
      <View style={styles.container}>
        <View style={styles.listWrapper}>
          <Text style = {styles.header}>ToDo List</Text>
          <View style = {styles.items}>
              {
                taskItems.map((item, index) => {
                  return (
                  <TouchableOpacity key= {index} onPress={() => completeTask(index)} >  
                  <Task text={item}></Task>
                  </TouchableOpacity>
                  )
                })
              }
          </View>
        </View>

        <KeyboardAvoidingView style={styles.bottom}>
            <TextInput placeholder="Add a new task" value = {task} onChangeText= {text => setTask(text)}style={styles.input}/>
            <TouchableOpacity onPress={() => addTask()}>
              <View style = {styles.addWrapper}>
                <Text style = {styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EBED',
  },
  listWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5
  },
  items: {


  },
  bottom: {
    position: 'absolute',
    width: '100%',
    bottom: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center', 
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  }
})

export default App;
