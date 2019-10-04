// src/clientes.js

import React from 'react';
import { View, Button, Text } from 'react-native';

const clientes = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Clientes</Text>
  </View>
);

clientes.navigationOptions = {
  title: 'About',
}


export default clientes;