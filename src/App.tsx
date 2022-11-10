import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BarGraph from './screens/BarGraph';

export type MainStackType = {
  BarGraph: any;
};
const Stack = createNativeStackNavigator<MainStackType>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'BarGraph'} component={BarGraph} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
