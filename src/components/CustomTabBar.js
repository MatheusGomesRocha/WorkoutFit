import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// TabBar customizada

const Div = styled.SafeAreaView`    
    flex-direction: row;
    background-color: #eee;
`;

const Container = styled.View`
    flex: 1;
    height: 65px;
    align-items: center;
`;

const Texto = styled.Text``;

const TouchHome = styled.TouchableHighlight`
    align-items: center;
`;

const TouchWorkouts = styled.TouchableHighlight`
    width: 100px;
    height: 100px;
    background-color: #3ba237;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    border: 5px solid #fff;
    margin-top: -50px;
`;

const TouchMyWorkouts = styled.TouchableHighlight`
    align-items: center;
`;

const Img = styled.Image`
    width: 30px;
    height: 30px;
`;

export default ({state, descriptors, navigation}) => {      // Passa obrigatóriamente essas 3 props
    return (
    <Div>
    {state.routes.map((route, index) => {       /** Um map das routes com um index/key */
        const options = descriptors[route.key].options; /** options recebe um descriptors[route.key] que indica que pode acessar as rotas */

        /** Todas as props indicadas no route, irão ser acessadas com o prefixo options. */
        /** Caso queira pegar apenas o nome da rota, traz ela como parâmetro no map e acessa com route.name */
       
        let label = route.name;
        
        if(options.tabBarLabel != undefined) {      /** Se tiver um tabBarLabel nas rotas, label o recebe */
            label = options.tabBarLabel;
        } else if (options.title != undefined) {    /** Se não tiver um tabBarLabel, mas tiver um title, o label o recebe */
            label = options.title;
        }

        switch(route.name) {        /** props.name significa o route.name que foi passado */
            case 'Home':            /** Caso o nome da rota for Home então... */
                nameIcon = 'home';
                
            break;
            case 'Workouts':           /** Caso for About então... */
                nameIcon = require('../assets/dumbbell.png');   // Fiz como Image pq não encontrei Icon parecido
            break;
            case 'MyWorkouts':         /** Caso for Profile então... */
                nameIcon = require('../assets/myworkouts.png'); // Fiz como Image pq não encontrei Icon parecido
            break;
        }

        function handleTabPress() {
            navigation.navigate(route.name);        // Ao clicar nos touchs que tem essa função, é transferido para a rota especificada
        }

        if(route.name == 'Home') {          // Caso nome da rota for Home
            return (
                <Container key={index}>
                    <TouchHome onPress={handleTabPress} underlayColor="transparent">
                        <>
                            <Icon size={30} name={nameIcon}/>
                            <Texto> Início </Texto>
                        </>
                    </TouchHome>
                </Container>
            );
        }

        if(route.name == 'Workouts') {          // Caso for Workouts que é a principal
            return (
                <Container key={index}>
                    <TouchWorkouts onPress={handleTabPress} underlayColor="#00ff00">
                        <>
                            <Img source={nameIcon}/>
                        </>
                    </TouchWorkouts>
                </Container>
            );
        }
        
        if(route.name == 'MyWorkouts') {            // Caso for MyWorkouts
            return (
                <Container key={index}>
                    <TouchMyWorkouts onPress={handleTabPress} underlayColor="transparent">
                        <>
                            <Img source={nameIcon}/>
                            <Texto> Meus Treinos </Texto>
                        </>
                    </TouchMyWorkouts>
                </Container>
            );
        }
    })}
</Div>
    );
}

    
