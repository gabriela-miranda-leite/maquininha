import database from '@react-native-firebase/database';

export const getAllByMachines = () =>
  database()
    .ref('/machines')
    .on('value', snapshot => {
      return snapshot.val();
    });

export const getByMachine = (id: string) =>
  database()
    .ref(`/machines/${id}`)
    .on('value', snapshot => {
      return snapshot.val();
    });
