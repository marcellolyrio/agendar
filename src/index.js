// src/index.js

import home from './home';
import clientes from './clientes';

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
  createStackNavigator({
    Home: home,
    Clientes: clientes,
  })
);

export default Routes;