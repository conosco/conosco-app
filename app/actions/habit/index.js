import { Alert } from 'react-native';

import * as HabitAC from './actionCreators';
import habitApi from '../../api/habitApi';

export const loadHabits = (token) => (dispatch) => {
  habitApi.getHabits(token)
    .then((result) => {
      console.log("result = ", result.status);
      if (result.status === 200) {
        const habits = result.data;
        console.log("habits = ", habits);
        dispatch(HabitAC.fetchHabits(habits));
      }
    })
    .catch((error) => {
      console.log(error);
      Alert('Ocorreu um erro ao carregar os habitos!');
    });
};

export const createHabit = (habit, navigation) => () => {
  const thenCallback = (result) => {
    console.log("status = ", result.status)
    if (result.status === 201) {
      Alert.alert('Habito criado com sucesso!');
      navigation.navigate('Dashboard');
    }
    else {
      alert('Não foi possível criar o habito!');
      console.log('create habit error: ', error);
    }
  };

  habitApi.createHabit(habit)
    .then(thenCallback)
};