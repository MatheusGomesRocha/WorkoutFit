import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const DayScroll = styled.ScrollView`
    width: 100%;
    height: 50px;
`;

const DayButton = styled.TouchableHighlight`
    width: ${props=>props.width};
    align-items: center;
    justify-content: center;
`;

const Item = styled.View`
    width: 30px;
    height: 30px;
    background-color: ${props=>props.bgColor};
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text``;



const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 9 para mostrar 9 buttons centralizados 
let dayWPx = Math.round(screenSize / 9) + "px";   // Usar para passar a prop de tamanho do DayButton pois precisa dizer a forma de medição de tamanho
let dayW = Math.round(screenSize / 9);        // Usar para o snapToInterval
let offsetW = Math.round((screenSize - dayW) / 2);

function Day ({month, day, dailyProgress, workoutDays, onPress}) {
    let bgColor= '#bbb';

    let today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);

    let thisDate = new Date(today.getFullYear(), month, day)

    if(workoutDays.includes(thisDate.getDay() )) { 

        if(thisDate.getTime() < today.getTime()) {
            let thisYear = thisDate.getFullYear();
            let thisMonth = thisDate.getMonth() + 1;
            let thisDay = thisDate.getDate();

            thisMonth = (thisMonth < 10?'0' + thisMonth:thisMonth);
            thisDay = (thisDay < 10?'0' + thisDay:thisDay);

            let dFormated = `${thisYear}-${thisMonth}-${thisDay}`;

            if(dailyProgress.includes(dFormated)) {
                bgColor = '#b5ffb8';
            } else {
                bgColor = '#ffb5b5';
            }

        }
        
    } else {
        bgColor = '#eee';
    }

    if(thisDate.getTime() == today.getTime()) {
        bgColor = '#b5eeff';
    }

    return (
        <DayButton width={dayWPx} onPress={onPress} underlayColor="transparent">
            <Item bgColor={bgColor}>
                <Texto> {day} </Texto>
            </Item>
        </DayButton>
    );
}

export default (props) => {
    const dayRef = useRef();  // Pega referência do dia
    const [selectDay, setSelectDay] = useState(props.selectDay);

    function handleScrollEnd(e) {   
        let posX = e.nativeEvent.contentOffset.x;       // Pegando o valor X horizontal do Scroll
        let targetDay = Math.round( posX / dayW + 1);     
        setSelectDay(targetDay); 
    }

    function scrollToDay(d) {     // Função que realiza o Scroll para o dia selecionado
        let posX = (d - 1) * dayW;
        dayRef.current.scrollTo({x:posX, y:0, animated:true});
    }

    useEffect(() => {
        props.setSelectDay(selectDay);
    }, [selectDay]);

    useEffect(() => {       // Da um Timeout de 10 milisegundos para realizar o scroll para o dia atual
        setTimeout(() => {
            if(props.selectMonth == new Date().getMonth()) {    // Se o mês selecionado for o mês atual, um scroll é realizado até o dia atual
                scrollToDay(new Date().getDate());
            } else {        // Se não for o mês atual, o scroll é realizado para o dia 1
                scrollToDay(1);
            }
        }, 10);
    }, [props.selectMonth]);

    let days = [];
    let daysInMonth = new Date(new Date().getFullYear(), (props.selectMonth+1), 0).getDate();   // Pegando quantos dias tem em um mês (passando o 0 como dia quer dizer que você vai pegar o último dia do mês anterior e assim sabendo quantos dias tem)
    
    for(let i=1;i<=daysInMonth;i++) {       // O array se adaptará à quantos dias tem no mês
        days.push(i);
    }

    const Progress = useSelector(state => state.user.dailyProgress);
    const WorkoutDays = useSelector(state => state.user.workoutDays);

    return (
        <DayScroll 
        ref={dayRef}      // Seta o Ref
        horizontal={true}   // Scroll horizontal
        showsHorizontalScrollIndicator={false}      // Não mostrar a barra de rolagem
        decelerationRate="fast"     // Desacelerar rápido para ficar fácil de ver os dias
        snapToInterval={dayW}     // Sempre deixar um Button no meio
        contentContainerStyle={{paddingLeft: offsetW, paddingRight: offsetW}}     // Adicionando um item invisível para 1 e 31 ficarem no meio
        onMomentumScrollEnd={handleScrollEnd}
        >
            {days.map((d, k) => (     // Mapenado os meses "m" e uma Key para o Button "k"
                <Day 
                    key={k}
                    day={d}
                    month={props.selectMonth}
                    dailyProgress={Progress}
                    workoutDays={WorkoutDays}
                    onPress={()=> scrollToDay(d)}
                />
            ))}
        </DayScroll>
    );
}