const initialState = {
    name: '',   // Nome do usuário
    nivel: '',      // Begginer, intermediate, advanced
    workoutDays: [],    // Dia 0 até dia 6, dia 0 sendo DOMINGO
    myWorkouts: [],     // Exercícios do usuário
    lastWorkout: '', // ID do ultimo workout
    dailyProgress: ['2020-07-22', '2020-07-21']
};

export default (state = initialState, action) => {  // Sempre state e action como parâmetros
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
        case 'SET_DAYS':
            return {...state, workoutDays: action.payload.workoutDays}
        break;
            
    }

    return state;
}