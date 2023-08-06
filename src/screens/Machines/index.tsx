import React, {useState, useEffect} from 'react';
import {ListRenderItem} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Card} from '../../components';
import {getAllByMachines} from '../../services';

import {DataProps, ProfileScreenProps} from './machines.types';
import * as S from './styles';

export const Machines = () => {
  const navigation = useNavigation<ProfileScreenProps>();
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    getAllByMachines()
      .then(response => {
        if (Array.isArray(response)) {
          setData(response);
        }
      })
      .catch(error => console.error('Erro ao obter dados: ', error));
  }, []);

  const renderHeader = () => (
    <S.Header>
      <S.Title>Escolha uma opção</S.Title>
      <S.Description>Descubra a melhor opção para o seu negócio.</S.Description>
    </S.Header>
  );

  const renderFooter = () => <S.Footer />;

  const renderItem: ListRenderItem<DataProps> = ({
    item: {name, description, id, image},
  }) => (
    <Card
      title={name}
      description={description}
      id={id}
      productImage={image}
      onPress={() => navigation.navigate('MachineInfo', {name, id})}
    />
  );

  return (
    <S.MachinesWrapper>
      <S.Machines
        data={data}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        showsVerticalScrollIndicator={false}
      />
    </S.MachinesWrapper>
  );
};
