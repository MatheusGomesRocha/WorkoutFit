const initialState = {
    nameUser: '',   // Nome do usuário
    nivel: '',      // Begginer, intermediate, advanced
    workoutDays: [],    // Dia 1 até dia 0
    myWorkouts: [],     // Exercícios do usuário
    lastWorkout: '', // ID do ultimo workout
    dailyProgress: ['2020-06-22', '2020-06-21']
};

export default (state = initialState, action) => {  // Sempre state e action como parâmetros
    switch(action.type) {
        case 'SET_NAME':
            return {...state, nameUser: action.payload.nameUser};
        break;
    }

    return state;
}