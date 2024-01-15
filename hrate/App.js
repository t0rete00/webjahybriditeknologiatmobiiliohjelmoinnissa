import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [age,setAge] = useState('');
  const [lowerLimit,setLowerLimit] = useState(0);
  const [upperLimit,setUpperLimit] = useState(0);

  function calculate() {
    setLowerLimit((220-(age)) * 0.65);
    setUpperLimit((220-(age)) * 0.85);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{lowerLimit.toFixed(0)}-{upperLimit.toFixed(0)}</Text>
      <Button onPress={calculate} title="Calculate" backgroundColor="#ff5c5c" ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6f6',
    justifyContent: 'center',
    padding: '8',
  },
  field: {
    marginBottom: 8,
  },
});