import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreloadScreen from '../pages/PreloadScreen';
import StarterStack from './StarterStack';
import AppTab from './AppTab';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Preload" component={PreloadScreen}/>
            <MainStack.Screen name="StarterStack" component={StarterStack} options={{
                headerTitle: null,  // Tirando o title do header
                headerTransparent: true,    // Esconder o header
            }}/>
            <MainStack.Screen name="AppTab" component={AppTab}/>
        </MainStack.Navigator>
    );
}

