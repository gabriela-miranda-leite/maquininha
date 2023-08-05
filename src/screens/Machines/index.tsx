import React, {useState, useEffect} from 'react';
import {ListRenderItem} from 'react-native';

import {Card} from '../../components';
import {getAllByMachines} from '../../services';

import {DataProps} from './machines.types';
import * as S from './styles';

export const Machines = () => {
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

  const renderItem: ListRenderItem<DataProps> = ({item}) => (
    <Card title={item.name} description={item.description} />
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
