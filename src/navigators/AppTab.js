import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppScreen from '../pages/AppScreen';
import Workouts from '../pages/WorkoutsStackScreen';
import MyWorkouts from '../pages/MyWorkoutsStackScreen';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();     // Criando Tab 

export default () => {
    return (
        <Tab.Navigator  tabBar={(props) => <CustomTabBar {...props} />}
        initialRouteName="Workouts"
        > 
            <Tab.Screen name="Home" component={AppScreen} tabBarLabel="Início"/>
            <Tab.Screen name="Workouts" component={Workouts}/>
            <Tab.Screen name="MyWorkouts" component={MyWorkouts}/>
        </Tab.Navigator>
    );
}