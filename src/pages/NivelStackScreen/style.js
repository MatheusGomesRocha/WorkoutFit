import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fff;
`;

export const Texto = styled.Text`
    font-size: 15px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
    margin-top: ${props=>props.top || '0'};
`;

export const ViewNivel = styled.View`
    width: 80%;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const Btn = styled.TouchableHighlight``;