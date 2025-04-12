import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dadosLogin = () => {
    if (username && password) {
      navigation.navigate('Inicial', { username });
    } else {
      Alert.alert('Preencha todos os campos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>⏳ Momento de Login</Text>
      <Text style={styles.frase}>⌨️ Por Favor, insira seu 🧑 Nome de Usuário e sua 🔑 Senha.</Text>
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.botao} onPress={dadosLogin}>
            <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  frase: { fontSize: 16, color: '#566573', textAlign: 'center', marginBottom: 20},
  input: { borderWidth: 1, borderColor: '#228b22', marginBottom: 15, padding: 10, borderRadius: 5 },
  botao: {backgroundColor: '#228b22', paddingVertical: 14, paddingHorizontal: 24, borderRadius: 10, marginTop: 16, alignItems: 'center', shadowRadius: 4,},
  textoBotao: {color: '#FFF', fontSize: 16, fontWeight: 'bold',}
});
