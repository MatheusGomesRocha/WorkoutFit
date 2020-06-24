import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation, NavigationActions, CommonActions } from '@react-navigation/native';

/**
 *  Aqui é uma função que irá verificar se o usuário já tem um nome registrado ou nao.
 *  Primeiro é preciso pegar o Reducer que contem as infos mais precisamente o Nome do usuário e atribuir para uma constante.
 *  Segundo tem que verificar se esse nome está preenchido, senão estiver realiza a primeira verificação
 * 
 */
export default (props) => {
    const name = useSelector(state => state.user.nameUser); // Peguei nome do usuário no Reducer
    const navigation = useNavigation();

    if(!name) {     // mandar para tela StarterStack, quando não tiver se "cadastrado" no app
        navigation.dispatch(CommonActions.reset({       // " Reseta a tela para qual está sendo redirecionada"    
            index: 0,       // Faz com que a página redirecionada seja a primeira, ou seja, sendo impossível voltar para a tela de preload
            routes: [       // Aqui recebe o nome rota como objeto e sempre dentro de um array
                { name: 'StarterStack'},
            ]
        }));
    } else {    // Mandar para AppTab se já tiver "cadastro" no app
    navigation.dispatch(CommonActions.reset({
        index: 0,
        routes: [
            { name: 'AppTab' },
        ]
    }));
    }

    return null;
}


