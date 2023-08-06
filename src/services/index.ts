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
        reject(error);
      });
  });
};

export const getByMachine = (id: string) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`/machines/${id}`)
      .on(
        'value',
        snapshot => {
          resolve(snapshot.val());
        },
        error => {
          reject(error);
        },
      );
  });
};
