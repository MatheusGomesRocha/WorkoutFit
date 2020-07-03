import React, { useState, useLayoutEffect } from 'react';
import { 
    Container,
    Texto,
    ViewTexto,
    BoldTexto,
    ViewDay,
    TextoDay,
    Btn,
} from './style';

import { useSelector, useDispatch, connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import BtnComponent from '../../components/BtnComponent';

function DayScreen(props) {
    const nameUser = useSelector(state => state.user.name);     // Pegando o nome do usuário armazenado no reducer
    const workoutDays = useSelector(state => state.user.workoutDays);
    const navigation = useNavigation();
    
    let firstName = nameUser.split(' ')[0];

    function toogleDay(d) {     // Function que passa os dias selecionados para o reducer
        let newWorkoutDays = [...props.workoutDays];        // Faz uma cópia do array workoutDays
        
        // Aqui é como se fosse um checkbox
        if(!props.workoutDays.includes(d)) {        // Verifica se o Day selecionado já está selecionado
            newWorkoutDays.push(d);     // Senão estiver, acrescenta ele
        } else {        // Se estiver selecionado
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);        // Desmarca a opção
        }

        props.setWorkoutDays(newWorkoutDays); // Envia os dias selecionados para o mapStateToProps para fazer a inserção no reducer
    }

    function next () {
        if(workoutDays.length > 7) {        // .lenght maior que 7 pq sem querer adicionei um nome no array do workoutDays
            navigation.navigate('Nivel');
        } else {
            alert('Você precisa treinar pelo menos 1 dia');
        }
    }

    return(
       <Container>
           <ViewTexto>
            <Texto> Olá <BoldTexto> {firstName} </BoldTexto>, tudo bem? </Texto>
            <Texto> Que <BoldTexto> dias da semana </BoldTexto> você pretende treinar? </Texto>
           </ViewTexto>
           <ViewDay>
               <BtnComponent 
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(1)?'#a5e8bc':false}
               onPress={()=>toogleDay(1)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Segunda </TextoDay>
               </BtnComponent>
               <BtnComponent 
                underlayColor="#ccc"
                backgroundColor={props.workoutDays.includes(2)?'#a5e8bc':false}
                onPress={()=>toogleDay(2)}
                style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Terça </TextoDay>
               </BtnComponent>
               <BtnComponent
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(3)?'#a5e8bc':false} 
               onPress={()=>toogleDay(3)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Quarta </TextoDay>
               </BtnComponent>
               <BtnComponent
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(4)?'#a5e8bc':false}
               onPress={()=>toogleDay(4)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Quinta </TextoDay>
               </BtnComponent>
               <BtnComponent 
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(5)?'#a5e8bc':false}
               onPress={()=>toogleDay(5)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Sexta </TextoDay>
               </BtnComponent>
               <BtnComponent
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(6)?'#a5e8bc':false}
               onPress={()=>toogleDay(6)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Sábado </TextoDay>
               </BtnComponent>
               <BtnComponent
               underlayColor="#ccc"
               backgroundColor={props.workoutDays.includes(0)?'#a5e8bc':false}
               onPress={()=>toogleDay(0)}
               style={{width:100, marginBottom: 20}}
               >
                   <TextoDay> Domingo </TextoDay>
               </BtnComponent>
           </ViewDay>
           <Btn onPress={next}>
               <Texto> Próximo </Texto>
           </Btn>
       </Container>
    );
}


const mapStateToProps = (state) => {  /** Passa as states pegas nos reducers e transforma em props */
    return {
        workoutDays: state.user.workoutDays     // Pegando os valores do reducer
    };
}

const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para a tela */
    return {
        setWorkoutDays:(workoutDays)=>dispatch({type:'SET_DAYS', payload: {workoutDays}})       // Fazendo a inserção no reducer
    };

}

export default connect(mapStateToProps, mapDispatchToProps) (DayScreen);