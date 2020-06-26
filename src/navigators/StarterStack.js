import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import StarterScreen from '../pages/StarterScreen';
import NameScreen from '../pages/NameScreen';
import DayScreen from '../pages/DayScreen';
import NivelScreen from '../pages/NivelScreen';

const StarterStack = createStackNavigator();        // Criando stack

export default () => {
    return (
        <StarterStack.Navigator>
            <StarterStack.Screen name="Intro" component={StarterScreen}/>
            <StarterStack.Screen name="Name" component={NameScreen}/>
            <StarterStack.Screen name="Day" component={DayScreen}/>
            <StarterStack.Screen name="Nivel" component={NivelScreen}/>
        </StarterStack.Navigator>
    );
}