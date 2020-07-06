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
            lazy={true}     // Redenrizar apenas a tab em que o usuário está vendo
            initialRouteName="Home"     // Iniciar o App em Home/Início
            tabBarOptions={{ 
                showIcon: true,     // Mostrar os icons
                showLabel: true,    // Mostrar o Label
                activeTintColor: '#000',    // Cor quando a tab estiver "focada"
                inactiveTintColor: '#aaa',  // Cor quando não estiver "focada"
                style: {    // Estilo da TabBar
                    height: 60,
                    padding: 8,
                },
                labelStyle: {   // Estilo do Label
                    fontSize: 15,
                    paddingBottom: 5
                }
            }}
            screenOptions={({route}) =>({           // Passando route como objeto para pegar o nome das rotas futuramente
                tabBarIcon: ({ focused }) => {      // Adicionando Icons dinamicamente
                    let icon = null;      // Atribui null para iniciar a variável que irá receber o Icone
    
                    switch(route.name) {        // Laço de repetição que pega o nome da rota (tem que passa como objeto no screenOptions)
                        case 'Home':        // Se nome da rota for Home
                            icon = 'home';  
                        break;
                        case 'Workouts':        // Se for Workouts
                            icon = focused ? 'heart' : 'heart-o';       // depois do "?" retorna true
                            // Se o usuário estiver na Tab Workouts, recebe o coração preenchido, se não estiver, recebe o coração vazio
                        break;
                        case 'MyWorkouts':      // Se for MyWorkouts
                            icon = 'tasks';
                        break;
                        case 'Settings':        // Se for Settings
                            icon = 'cog';
                        break;
                    }
                    
                    // name no Icon irá receber a variável para ser adicionado dinamicamente
                    // Se a Tab estiver focado, irá receber a cor Preta ´para dar um destaque a mais dos outros 
                    return <Icon name={icon} size={25} style={{ color: focused ? '#000' : '#999'}}/>
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