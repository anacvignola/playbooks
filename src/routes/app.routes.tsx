import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';
import Player from '../pages/Player';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#EFF3F5' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    <App.Screen name="Player" component={Player} />
  </App.Navigator>
);

export default AppRoutes;
