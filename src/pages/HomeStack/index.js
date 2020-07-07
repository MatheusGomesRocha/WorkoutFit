import React, {useLayoutEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { 
    Container,
    Texto,
    Subtitle,
    SubtitleText,
    SubtitleItem,
    SubtitleBox
} from './style';
import { useNavigation } from '@react-navigation/native';
import HomeMonthScroll from '../../components/MonthScroll';
import DayScroll from '../../components/DayScroll';
import DayStatus from '../../components/DayStatus';

export default (props) => {
    let today = new Date();

    const [selectMonth, setSelectMonth] = useState(today.getMonth());
    const [selectDay, setSelectDay] = useState(today.getDate());

    const Progress = useSelector(state => state.user.dailyProgress);
    const WorkoutDays = useSelector(state => state.user.workoutDays);
    return(
        <Container>
            <HomeMonthScroll
                selectMonth={selectMonth}
                setMonth={setSelectMonth}
            />       
            <DayScroll
                selectMonth={selectMonth}
                selectDay={selectDay}
                setSelectDay={setSelectDay}

                dailyProgress={Progress}
                workoutDays={WorkoutDays}
            />         
            <DayStatus/>        
            
            <Texto> {selectMonth} </Texto>
            <Texto> {selectDay} </Texto>
             <Subtitle>    
                <SubtitleText> Legenda: </SubtitleText>
                <SubtitleItem>  
                    <SubtitleBox bgColor="#b5eeff"></SubtitleBox>
                    <SubtitleText> Hoje </SubtitleText>
                </SubtitleItem>
                <SubtitleItem>
                    <SubtitleBox bgColor="#b5ffb8"></SubtitleBox>
                    <SubtitleText> Treino feito </SubtitleText>
                </SubtitleItem>
                <SubtitleItem>
                    <SubtitleBox bgColor="#ffb5b5"></SubtitleBox>
                    <SubtitleText> Treino perdido </SubtitleText>
                </SubtitleItem>
                <SubtitleItem>  
                    <SubtitleBox bgColor="#eee"></SubtitleBox>
                    <SubtitleText> Dia de descanso </SubtitleText>
                </SubtitleItem>
                <SubtitleItem>
                    <SubtitleBox bgColor="#bbb"></SubtitleBox>
                    <SubtitleText> Dia futuro </SubtitleText>
                </SubtitleItem>
            </Subtitle>
        </Container>
    );
}


