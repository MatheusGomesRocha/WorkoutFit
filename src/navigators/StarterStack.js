import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';

import StarterScreen from '../pages/StarterScreen';

const StarterStack = createStackNavigator();

export default () => {
    return (
        <StarterStack.Navigator>
            <StarterStack.Screen name="Intro" component={StarterScreen}/>
        </StarterStack.Navigator>
    );
}