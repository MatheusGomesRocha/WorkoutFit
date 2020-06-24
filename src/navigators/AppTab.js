import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import AppScreen from '../pages/AppScreen';

const Tab = createBottomTabNavigator();     // Criando Tab 

export default () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Intro" component={AppScreen}/>
        </Tab.Navigator>
    );
}