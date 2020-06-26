import React, { useState } from 'react';
import { 
    Container,
    Texto,
    Input,
} from './style';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    function Register () {
        if(name != '') {
            dispatch({
                type: 'SET_NAME',
                payload: {
                    name
                }
            });

            navigation.navigate('Day');
        } else {
            alert ('Digite um nome');
        }
    }

    return(
        <Container>
            <Texto> Qual é o seu nome?</Texto>
            <Input 
            value={name}
            onChangeText={n=>setName(n)}
            autoFocus={true}
            autoCapitalize="words"
            onSubmitEditing={Register}
            />
        </Container>
    );
}