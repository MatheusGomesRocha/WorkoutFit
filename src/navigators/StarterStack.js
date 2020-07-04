import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import StarterScreen from '../pages/StarterStackScreen';
import NameScreen from '../pages/NameStackScreen';
import DayScreen from '../pages/DayStackScreen';
import NivelScreen from '../pages/NivelStackScreen';

const StarterStack = createStackNavigator();        // Criando stack

export default () => {
    return (
        <StarterStack.Navigator>
            <StarterStack.Screen name="Intro" component={StarterScreen} options={{ title: 'awesome app'}}/>
            <StarterStack.Screen name="Name" component={NameScreen} />
            <StarterStack.Screen name="Day" component={DayScreen}/>
            <StarterStack.Screen name="Nivel" component={NivelScreen}/>
        </StarterStack.Navigator>
    );
}