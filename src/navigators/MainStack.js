import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreloadScreen from '../pages/PreloadScreen';
import StarterStack from './StarterStack';
import AppTab from './AppTab';

const MainStack = createStackNavigator();       // Criando Stack

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Preload" component={PreloadScreen}/>
            <MainStack.Screen name="StarterStack" component={StarterStack} options={{
                headerTitle: null,
                headerTransparent: true,
            }}/>
            <MainStack.Screen name="AppTab" component={AppTab}/>
        </MainStack.Navigator>
    );
}

