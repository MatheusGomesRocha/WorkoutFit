import React, { useLayoutEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import StarterScreen from '../pages/StarterScreen';
import NameScreen from '../pages/NameScreen';
import DayScreen from '../pages/DayScreen';
import NivelScreen from '../pages/NivelScreen';
import RecommendationScreen from '../pages/RecommendationScreen';

const StarterStack = createStackNavigator();        // Criando stack

export default () => {
    return (
        <StarterStack.Navigator>
            <StarterStack.Screen name="Intro" component={StarterScreen} options={{ title: 'awesome app'}}/>
            <StarterStack.Screen name="Name" component={NameScreen}/>
            <StarterStack.Screen name="Day" component={DayScreen}/>
            <StarterStack.Screen name="Nivel" component={NivelScreen}/>
            <StarterStack.Screen name="Recommendation" component={RecommendationScreen}/>
        </StarterStack.Navigator>
    );
}