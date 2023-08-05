import database from '@react-native-firebase/database';

export const getAllByMachines = () => {
  return new Promise((resolve, reject) => {
    database()
      .ref('/machines')
      .once('value')
      .then(snapshot => {
        resolve(snapshot.val());
      })
      .catch(error => {
        console.error('Erro ao buscar dados: ', error);
        reject(error);
      });
  });
};

export const getByMachine = (id: string) =>
  database()
    .ref(`/machines/${id}`)
    .on('value', snapshot => {
      return snapshot.val();
    });
