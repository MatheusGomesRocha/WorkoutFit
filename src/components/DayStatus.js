import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import BtnComponent from './BtnComponent';

const Ballon = styled.View`
    width: 0;
    height: 0;
    borderLeftColor: transparent;
    borderLeftWidth: 15px;
    borderBottomWidth: 15px;
    borderBottomColor: #ededed;
    borderRightWidth: 15px;
    borderRightColor: transparent;
`;

const Area = styled.View`
    width: 90%;
    padding: 20px;
    background-color: #ededed;
    border-radius: 10px;
`;

const BigTexto = styled.Text`
    font-size: 15px;
    align-self: center;
`;

const Texto = styled.Text`
    color: #fff;
    font-weight: bold;
`;

const TimeText = styled.Text`
    font-size: 13px;
    align-self: center;
`;

const Strong = styled.Text`
    font-weight: bold;
`;

export default (props) => {
    let today = new Date();
    today.setHours(0);      // zera a hora
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), props.selectMonth, props.selectDay)

    let thisYear = thisDate.getFullYear();
    let thisMonth = thisDate.getMonth() + 1;
    let thisDay = thisDate.getDate();
    thisMonth = (thisMonth < 10?'0' + thisMonth:thisMonth);
    thisDay = (thisDay < 10?'0' + thisDay:thisDay);
    let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

    let dayOff = false;
    let isToday = false;
    let isFuture = false;
    let isDone = false;

    if(!props.workoutDays.includes(thisDate.getDay())) {
        dayOff = true;
    } else if (thisDate.getTime() > today.getTime()) {
        isFuture = true;
    } else {
        if(props.dailyProgress.includes(dFormated)) {
            isDone = true;
        } else {
            isDone = false;
        }
    }

    if(thisDate.getTime() == today.getTime()) {
        isToday = true;
    }

    function setAdd () {
        props.addProgress(dFormated);
    }
    
    function setDel () {
        props.delProgress(dFormated);
    }

    const [timeLeft, setTimeLeft] = useState('');
    useEffect(() => {
        function timerFunction() {
            let now = Date.now();
            let end = new Date();
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);
            end = end.getTime();

            let diff = end - now;

            let h = Math.floor(diff / (1000 * 60 * 60));
            let m = Math.floor((diff / (1000 * 60)) - (h * 60));
            let s = Math.floor((diff / 1000) - (m*60) - ((h*60) *60));

            h = h<10?'0'+h:h;
            m = m<10?'0'+m:m;
            s = s<10?'0'+s:s;

            setTimeLeft(`${h}h ${m}m ${s}s`)
        } 
        let timer = setInterval(timerFunction, 1000);
        timerFunction();

        return ()=>clearInterval(timer);
    })

    return (
        <>
            <Ballon></Ballon>
            <Area>
                {dayOff &&
                    <BigTexto> Dia de descanso </BigTexto>
                }
                {isFuture &&
                    <BigTexto> Data no futuro </BigTexto>
                }
                {!dayOff && !isFuture && isDone &&
                    <>
                        <BigTexto><Strong> Parabéns, você treinou </Strong></BigTexto>
                        <BtnComponent onPress={setDel} underlayColor="#4ac34e" backgroundColor="#4ac34e" style={{marginTop: 20}}>
                            <Texto> Desmarcar </Texto>
                        </BtnComponent>
                    </>
                }
                {!dayOff && !isFuture && !isDone && !isToday &&
                <>
                    <BigTexto> <Strong> Fraco! Você não treinou </Strong></BigTexto>
                    <BtnComponent onPress={setAdd} underlayColor="#4ac34e" backgroundColor="#4ac34e" style={{marginTop: 20}}>
                        <Texto> Marcar como feito </Texto>
                    </BtnComponent>
                </>
                }
                {!dayOff && !isFuture && !isDone && isToday &&
                <>
                    <BigTexto> <Strong> Hoje tem treino </Strong> </BigTexto>
                    <TimeText> Você tem {timeLeft} para treinar </TimeText>
                    <BtnComponent onPress={props.toWorkout} underlayColor="#4ac34e" backgroundColor="#4ac34e" style={{marginTop: 20}}> 
                        <Texto> Iniciar trieno </Texto>
                    </BtnComponent>
                </>
                }
            </Area>
        </>
    );
}