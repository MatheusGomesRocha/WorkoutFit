import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppScreen from '../pages/HomeStack';
import Workouts from '../pages/WorkoutsStackScreen';
import MyWorkouts from '../pages/MyWorkoutsStackScreen';
import CustomTabBar from '../components/CustomTabBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabBarIcon from '../components/TabBarIcon';
import Settings from '../pages/SettingScreen';

const Tab = createBottomTabNavigator();     // Criando Tab 

export default () => {
    return (
        <Tab.Navigator  
            lazy={true}
            initialRouteName="Workouts"
            tabBarOptions={{ 
                showIcon: true,
                showLabel: true,
                activeTintColor: '#000',
                inactiveTintColor: '#aaa',
                style: {
                    height: 60,
                    padding: 8,
                },
                labelStyle: {
                    fontSize: 15,
                    paddingBottom: 5
                }
            }}
            screenOptions={({route}) =>({
                tabBarIcon: ({ focused }) => {
                    let imgSource = null;
    
                    switch(route.name) {
                        case 'Home':
                            imgSource = 'home';
                        break;
                        case 'Workouts':
                            imgSource = focused ? 'heart' : 'heart-o';
                        break;
                        case 'MyWorkouts':
                            imgSource = 'tasks';
                        break;
                        case 'Settings':
                            imgSource = 'cog';
                        break;
                    }
    
                    return <Icon name={imgSource} size={25} style={{ color: focused ? '#000' : '#999'}}/>
                }
            })} 
        > 
            <Tab.Screen name="Home" component={AppScreen} options={{tabBarLabel: "Início"}}/>
            <Tab.Screen name="Workouts" component={Workouts} options={{tabBarLabel: "Progresso"}}/>
            <Tab.Screen name="MyWorkouts" component={MyWorkouts} options={{tabBarLabel: "Treinos"}}/>
            <Tab.Screen name="Settings" component={Settings} options={{tabBarLabel: "Ajustes"}}/>
        </Tab.Navigator>
    );
}