import React, { useLayoutEffect } from 'react';
import {
    Texto,
    Container,
    Img,
    ImgView,
    Btn,
    BtnView,
    BtnText,
} from './style'

import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';

export default () => {
    const navigation = useNavigation();

    function Start () {
        navigation.navigate('Name');
    }
    
    return(
        <Container> 
            <Texto> Bem vindo(a) ao WorkoutFit </Texto>
            <ImgView>
                <Img source={require('../../assets/boneco.png')}/>
            </ImgView>
            <BtnView>
                <BtnComponent underlayColor="#0b7ac6" width="100%" backgroundColor="#0072c0" onPress={Start}> 
                    <BtnText> Iniciar configuração </BtnText> 
                </BtnComponent>
            </BtnView>
        </Container>
    );
}