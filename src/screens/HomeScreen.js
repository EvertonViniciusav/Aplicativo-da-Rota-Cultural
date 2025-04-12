import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native';
import mockData from "../data/mockData";

export default function HomeScreen({ route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá 👋, {username}!</Text>
      <Text style={styles.frase}>💡 Hoje é um ótimo dia para descobrir novas culturas e lugares incríveis.</Text>
      <FlatList
        data={mockData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={{ uri: item.imagem }} style={styles.imagem} />
            <View style={styles.info}>
              <Text style={styles.nome}>🏪 {item.nome}</Text>
              <Text style={styles.descricao}>🧾 {item.descricao}</Text>
            </View>
          </View>
        )}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10,},
  titulo: { fontSize: 25, fontWeight: 'bold', padding: 10},
  frase: { fontSize: 16, color: '#566573', textAlign: 'center', padding: 10},
  item: { flexDirection: "row", padding: 10, marginVertical: 5, backgroundColor: "#fff", borderRadius: 10, alignItems: "center" },
  imagem: { width: 80, height: 80, borderRadius: 10, marginRight: 10 },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  descricao: { fontSize: 14, color: "gray", marginBottom: 3 },
});
