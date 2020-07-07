import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScroll = styled.ScrollView`
    width: 100%;
    height: 60px;
`;

const MonthButton = styled.TouchableHighlight`
    width: ${props=>props.width};
    align-items: center;
    justify-content: center;
`;

const Item = styled.View`
    width: 90%;
    height: 30px;
    background-color: #eee;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const Texto = styled.Text``;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const screenSize = Math.round(Dimensions.get('window').width);  // Pegando tamanho da tela do celular

// Dividindo tamanho da tela em 3 para mostrar 3 buttons centralizados 
let thirdSPx = screenSize / 3 + "px";   // Usar para passar a prop de tamanho do MonthButton pois precisa dizer a forma de medição de tamanho
let thirdS = screenSize / 3;        // Usar para o snapToInterval

export default (props) => {
    const monthRef = useRef();  // Pega referência do mês
    const [selectMonth, setSelectMonth] = useState(props.selectMonth);

    function handleScrollEnd(e) {   
        let posX = e.nativeEvent.contentOffset.x;       // Pegando o valor X horizontal do Scroll
        let targetMonth = Math.round( posX / thirdS );     
        setSelectMonth(targetMonth);
    }

    function scrollToMonth(m) {     // Função que realiza o Scroll para o mês selecionado
        let posX = m * thirdS;
        monthRef.current.scrollTo({x: posX, y:0, animated: true})
    }

    useEffect(() => {
        props.setMonth(selectMonth);
    }, [selectMonth]);

    useEffect(() => {       // Da um Timeout de 10 milisegundos para realizar o scroll para o mês atual
        setTimeout(() => {
            scrollToMonth(selectMonth);
        }, 10);
    }, [props.selectMonth]);

    return (
        <MonthScroll 
        ref={monthRef}      // Seta o Ref
        horizontal={true}   // Scroll horizontal
        showsHorizontalScrollIndicator={false}      // Não mostrar a barra de rolagem
        decelerationRate="fast"     // Desacelerar rápido para ficar fácil de ver os meses
        snapToInterval={thirdS}     // Sempre deixar um Button no meio
        contentContainerStyle={{paddingLeft: thirdS, paddingRight: thirdS}}     // Adicionando um item invisível para Janeiro e Dezembro ficarem no meio
        onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k) => (     // Mapenado os meses "m" e uma Key para o Button "k"
                <MonthButton key={k} width={thirdSPx} onPress={() => setSelectMonth(k)} underlayColor="transparent">
                    <Item style={k == selectMonth? {    // quando o mês for selecionado
                        backgroundColor: '#ccc',
                        width: '100%',
                        height: 40,
                    } : {}}>
                        <Texto> {m} </Texto>
                    </Item>
                </MonthButton>
            ))}
        </MonthScroll>
    );
}