import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PreloadScreen from '../pages/PreloadScreen';
import StarterStack from './StarterStack';
import AppTab from './AppTab';
import BtnComponent from '../components/BtnComponent';
import Icon from 'react-native-vector-icons/FontAwesome';

const MainStack = createStackNavigator();       // Criando Stack

export default () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="Preload" component={PreloadScreen}/>
            <MainStack.Screen name="StarterStack" component={StarterStack} options={{
                title: null,
                headerTransparent: true,
            }}/>
            <MainStack.Screen name="AppTab" component={AppTab} options={{
                headerTitle: 'WorkoutFit',
                headerTitleAlign: 'center',
                headerRight: (props) => (
                    <BtnComponent
                        {...props}
                        onPress={() => {
                            alert('indo para settings');
                        }}
                        backgroundColor="transparent"
                        underlayColor="transparent"
                    >
                        <Icon name="cog" size={25}/>
                    </BtnComponent>
                ),
            }}/>
        </MainStack.Navigator>
    );
}

