import React, { Component } from "react";
import { Plataform, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Text, View, Image,  Button} from "react-native";

function Separator() {
  return <View style={styles.separator} />;
}

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
       
          <View style={styles.item}>
             <Text style={styles.titleText}>Agendar</Text>
          </View>
          
          <View style={styles.button}>
              <Button
              title="Clientes"
              color="#841584"
              onPress={() => Alert.alert('Cadastro de clientes')} 
              />
          </View>

          <View style={styles.button}>
              <Button
              title="Agendamento"
              color="#841584"
              onPress={() => Alert.alert('Agendar cliente')} 
              />
          </View>
          
          <View style={styles.button}>
              <Button
              title="Faturamento"
              color="#841584"
              onPress={() => Alert.alert('Ver o faturamento')} 
              />
          </View>
          
          <View style={styles.button}>
              <Button
              title="Perfil"
              color="#841584"
              onPress={() => Alert.alert('Configurar perfil')} 
              />
          </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    color: '#000',
    padding: 20,
    height: 80,
    width: 200,
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
  },
  item: {
    backgroundColor: '#000',
    padding: 20,
    width:450,
    marginVertical: 0,
    marginHorizontal: 0,
    top: 0,
    position: "absolute",
  },
   
});