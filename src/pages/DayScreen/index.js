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
    const nameUser = useSelector(state => state.user.name);
    const days = useSelector(state => state.user.workoutDays);
    const navigation = useNavigation();

    let firstName = nameUser.split(' ')[0];

    function toogleDay(d) {
        let newWorkoutDays = [...props.workoutDays];
        
        if(!props.workoutDays.includes(d)) {
            newWorkoutDays.push(d);
        } else {
            newWorkoutDays = newWorkoutDays.filter(i=>i!=d);
        }

        props.setWorkoutDays(newWorkoutDays);
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
       </Container>
    );
}



const mapStateToProps = (state) => {  /** Passa as states pegas nos reducers e transforma em props */
    return {
        workoutDays: state.user.workoutDays
    };
}

const mapDispatchToProps = (dispatch) => {          /** Executa uma função que cria uma props para a tela */
    return {
        setWorkoutDays:(workoutDays)=>dispatch({type:'SET_DAYS', payload: {workoutDays}})
    };

}

export default connect(mapStateToProps, mapDispatchToProps) (DayScreen);