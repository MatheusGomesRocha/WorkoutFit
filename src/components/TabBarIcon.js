import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Div = styled.View``;

const Texto = styled.Text`

`;

const Img = styled.Image``;

const Badge = styled.View`
    position: absolute;
    right: -6px;
    top: -3px;
    background-color: #ff0000;
    width: 15px;
    height: 15px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

function TabBarIcon (props) {       /** Aqui pega o nome da rota que foi passado no MainTab */
    let iconName = null;

    switch(props.name) {        /** props.name significa o route.name que foi passado */
        case 'Home':            /** Caso o nome da rota for Home então... */
            iconName = 'home';
        break;
        case 'Workouts':           /** Caso for About então... */
            iconName = 'bank';
        break;
        case 'MyWorkouts':         /** Caso for Profile então... */
            iconName = 'cog';
        break;
    }

    return (
        <Div>
            <Icon name={iconName} size={30} style={{ color: '#ccc' }}/> 
        </Div>
    ); 
}

export default TabBarIcon;