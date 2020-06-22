import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/store';

const Texto = styled.Text``;

function App () {
    return (  
        <Texto> Oi </Texto>   
    );
}

export default App;