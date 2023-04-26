import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [counterInput, setCounterInput] = useState('')
  

  return (
    <View style={styles.container}>
      <Text style={styles.iambuvak}>React Native Counter App | iambuvak </Text>
      <Text style={styles.textStyle}> {counter} </Text>
      <TextInput
      style={styles.inputStyle}
      value={counterInput}
      onChangeText={setCounterInput}
      keyboardType='numeric'
      placeholder='Sayı giriniz'
      ></TextInput>
      <View style={styles.btnBox}>
        <Text style={styles.btn} 
        onPress={()=> setCounter(counter+parseInt(counterInput, 10))}>send</Text>
        <Text style={styles.btn} onPress={()=>setCounter(counter+1)}>+</Text>
        <Text style={styles.btn} onPress={()=>setCounter(counter-1)}>-</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iambuvak:{
    padding: 30,
    fontSize: 18
  },
  inputStyle:{
    padding: 18,
    fontSize: 16,
    color: 'red',
  },

  textStyle:{
    color: 'red',
    fontSize: 25,
    marginBottom: 15
  },
  btnBox:{
    flexDirection: 'row',
    gap: 15,
  },
  btn:{
    backgroundColor: "red",
    padding: 16,
    color: 'white'
  }
});
