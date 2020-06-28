import React, { useState, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { 
    Container,
    Texto,
    ViewNivel,
    Bold,
    Btn,
} from './style';
import BtnComponent from '../../components/BtnComponent';

import { useSelector, useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function NivelScreen (props) {
    const navigation = useNavigation();
    const nivel = useSelector(state => state.user.nivel);
    const workoutDays = useSelector(state => state.user.workoutDays);
    let funnyPhrase = '';

    switch(workoutDays.length) {
        case 8:
            funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
        break;
        case 9: 
            funnyPhrase = '2 dias acho pouco, mas quem sou eu pra te julgar';
        break;
        case 10:
            funnyPhrase = 'Legal, 3 dias dá pro gasto...';
        break;
        case 11:
            funnyPhrase = 'Legal, 4 dias vai ser TOP!';
        break;
        case 12:
            funnyPhrase = 'É isso aí, 5 dias é o mínimo, lets GO!';
        break;
        case 13:
            funnyPhrase = '6 dias não é pra todo mundo...';
        break;
        case 14:
            funnyPhrase = 'Woooow! todo dia?! WTF?!';
        break;
    }

    function setMyNivel(n) {
        props.setNivel(n);
    }

    function Next() {
        if(!nivel) {
            alert('Você precisa escolher um nível');
        } else {
            navigation.navigate('Recommendation')
        }
    }

    return (
        <Container>
                <Texto top="50px"> {funnyPhrase} </Texto>
                <Texto> Qual seu nível hoje? </Texto>
                <ViewNivel>
                    <BtnComponent 
                    underlayColor="#ccc"
                    backgroundColor={props.nivel == 'beginner'?'#a5e8bc':false}
                    onPress={()=>setMyNivel('beginner')}
                    style={{ marginBottom: 20}}
                    >
                        <Bold> Iniciante / Um frango </Bold>
                    </BtnComponent>
                    <BtnComponent 
                        underlayColor="#ccc"
                        backgroundColor={props.nivel == 'normal'?'#a5e8bc':false}
                        onPress={()=>setMyNivel('normal')}
                        style={{ marginBottom: 20}}
                    >
                        <Bold> Intermediário / Me viro bem </Bold>
                    </BtnComponent>
                    <BtnComponent
                    underlayColor="#ccc"
                    backgroundColor={props.nivel == 'hard'?'#a5e8bc':false} 
                    onPress={()=>setMyNivel('hard')}
                    style={{ marginBottom: 20}}
                    >
                        <Bold> Avançado / Primo do The Rock </Bold>
                    </BtnComponent>
                </ViewNivel>
                <Btn onPress={Next}>
                    <Texto> Próximo </Texto>
                </Btn>
        </Container>
    );
}

const mapStateToProps = (state) => {  /** Passa as states pegas nos reducers e transforma em props */
    return {
        nivel: state.user.nivel     // Pegando os valores do reducer
    };
}

const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para a tela */
    return {
        setNivel:(nivel)=>dispatch({type:'SET_NIVEL', payload: {nivel}})       // Fazendo a inserção no reducer
    };

}

export default connect(mapStateToProps, mapDispatchToProps) (NivelScreen);