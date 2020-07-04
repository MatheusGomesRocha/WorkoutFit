import React, {useLayoutEffect} from 'react';
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
import MonthScroll from '../../components/MonthScroll';
import DayScroll from '../../components/DayScroll';
import DayStatus from '../../components/DayStatus';

export default () => {
    const name = useSelector(state=>state.user.name);
    const nivel = useSelector(state=>state.user.nivel);
    const days = useSelector(state=>state.user.workoutDays);
    const navigation = useNavigation();

    return(
        <Container>
            <MonthScroll/>
            <DayScroll/>
            <DayStatus/>

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
                    <SubtitleBox bgColor="#ddd"></SubtitleBox>
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


