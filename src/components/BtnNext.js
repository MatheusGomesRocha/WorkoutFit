import styled from 'styled-components/native';

export const BtnView = styled.View`
    flex: 1;
    width: 100%;
    margin-top: 50px;
    flex-direction: row;
    justify-content: center;
`;

export const DefaultBtn = styled.TouchableHighlight`
    width: 150px;;
    background-color: ${props=>props.bgColor || '#eee'};
    padding: 10px 20px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    margin: 20px;
`;

export const DefaultView = styled.View`
    align-items: ${props=>props.align || 'center'};
`;

export const BtnText = styled.Text`
    color: ${props=>props.color || '#fff'};
`;