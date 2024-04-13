import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const jobs = [
  { title: 'Desenvolvedor Backend', company: 'Empresa 1', salary: 'R$ 5333', description: 'Desc do trabalho para desenvolvedor backend.', contact: 'kev@gmail.com' },
  { title: 'Designer Gráfico', company: 'Empresa 2', salary: 'R$ 4200', description: 'Desc do trabalho para designer gráfico.', contact: 'lea@gmail.com' },
  { title: 'Engenheiro de Software', company: 'Empresa 3', salary: 'R$ 6333', description: 'Desc do trabalho para engenheiro de software.', contact: 'gabs@gmail.com' },
  { title: 'Analista de Dados', company: 'Empresa 4', salary: 'R$ 5900', description: 'Desc do trabalho para analista de dados.', contact: 'argo@gmail.com' },
  { title: 'Desenvolvedor Frontend', company: 'Empresa 5', salary: 'R$ 4840', description: 'Desc do trabalho para desenvolvedor frontend.', contact: 'guiz@gmail.com' }
];

const HomePage = () => {
  const renderJobItem = ({ item }) => (
    <View style={ styles.jobItem }>
      <Text style={ styles.title }> { item.title } </Text>
      <Text style={ styles.company }> { item.company } </Text>
      <Text style={ styles.salary }> Salário: { item.salary } </Text>
      <Text style={ styles.description }> Descrição: { item.description } </Text>
      <Text style={ styles.contact }> Contato: { item.contact } </Text>
    </View>
  );

  return (
    <FlatList
      data={jobs}
      renderItem={renderJobItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  jobItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  company: {
    fontSize: 18,
    marginBottom: 5
  },
  salary: {
    fontSize: 16,
    marginBottom: 5,
    color: '#007bff'
  },
  description: {
    fontSize: 16,
    marginBottom: 5
  },
  contact: {
    fontSize: 16,
    color: '#28a745'
  },
});

export default HomePage;