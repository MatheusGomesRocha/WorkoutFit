import React, {useLayoutEffect} from 'react';
import { useSelector } from 'react-redux';
import { 
    Container,
    Texto
} from './style';

export default () => {
    const name = useSelector(state=>state.user.name);
    const nivel = useSelector(state=>state.user.nivel);
    const days = useSelector(state=>state.user.workoutDays);
    const navigation = useNavigation();

    return(
        <Container>
            <Texto>  </Texto>
        </Container>
    );
}


