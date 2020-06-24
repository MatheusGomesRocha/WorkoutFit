import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

import StarterScreen from '../pages/StarterScreen';
import NameScreen from '../pages/NameScreen';

const StarterStack = createStackNavigator();        // Criando stack

export default () => {
    return (
        <StarterStack.Navigator>
            <StarterStack.Screen name="Intro" component={StarterScreen}/>
            <StarterStack.Screen name="Name" component={NameScreen}/>
        </StarterStack.Navigator>
    );
}