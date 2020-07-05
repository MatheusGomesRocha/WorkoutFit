import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import { store, persistor } from './src/store';
import MainStack from './src/navigators/MainStack';
import AppTab from './src/navigators/AppTab';

function App () {
    return (  
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    <AppTab/>
                </NavigationContainer>
            </PersistGate>
        </Provider>   
    );
}

export default App;