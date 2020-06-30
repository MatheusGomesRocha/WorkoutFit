import React from 'react';
import {useSelector} from 'react-redux';
import { 
    Container,
    Texto
} from './style';

export default () => {
    const name = useSelector(state=>state.user.name);
    const nivel = useSelector(state=>state.user.nivel);
    const days = useSelector(state=>state.user.workoutDays);
    return(
        <Container>
            <Texto> Olá {name} </Texto>
        </Container>
    );
}