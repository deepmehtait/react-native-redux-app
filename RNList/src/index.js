import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

const RNList = () => (
    <Provider store={createStore(reducers)} >
      <View>
        <Text>{'sdfsdfs'}</Text>
      </View>
    </Provider>
  );

AppRegistry.registerComponent('RNList', () => RNList);
