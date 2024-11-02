import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './components/reducers/index';
import rootSaga from './components/sagas/index';
import Screen1 from './components/Screens/Screen1';
import Screen2 from './components/Screens/Screen2';
import Screen3 from './components/Screens/Screen3';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen 
            name="Welcome" 
            component={Screen1}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="TaskList" 
            component={Screen2}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="AddTask" 
            component={Screen3}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}