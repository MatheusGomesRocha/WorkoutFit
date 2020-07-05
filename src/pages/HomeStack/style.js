import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fff;
`;

export const Texto = styled.Text``;

export const Subtitle = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-top: 30px;
`;

export const SubtitleText = styled.Text`
    color: #555;
`;

export const SubtitleItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

export const SubtitleBox = styled.View`
    width: 15px;
    height: 15px;
    background-color: ${props=>props.bgColor || '#ccc'};
    margin-right: 5px;
`;