import React, { useState } from 'react';
import { 
    Container,
    Texto,
    Input,
} from './style';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { BtnView, DefaultBtn, DefaultView, BtnText} from '../../components/BtnNext';

export default () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [name, setName] = useState('');

    function Register () {
        if(name.trim() != '') {
            dispatch({
                type: 'SET_NAME',
                payload: {
                    name
                }
            });

            navigation.navigate('Day', {initial: false,});
        } else {
            alert ('Digite um nome');
        }
    }

    function goNext () {
        if(name.trim() != '') {
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
            <BtnView>
                <DefaultView align="flex-end">
                    <DefaultBtn>
                        <BtnText color="#aaa"> Anterior </BtnText>
                    </DefaultBtn>
                </DefaultView>
                <DefaultView align="flex-start">
                    <DefaultBtn underlayColor="#0b7ac6" bgColor="#0072c0" onPress={goNext}>
                        <BtnText> Próximo </BtnText>
                    </DefaultBtn>
                </DefaultView>
            </BtnView>
        </Container>
    );
}