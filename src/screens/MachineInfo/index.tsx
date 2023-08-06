import React, {useEffect, useState} from 'react';

import {IconDetail, SlideImage} from '../../components';
import {getByMachine} from '../../services';

import {DataProps, MachineInfoProps} from './machineInfo.types';
import * as S from './styles';

export const MachineInfo: React.FC<MachineInfoProps> = ({route}) => {
  const [data, setData] = useState<DataProps>();
  const {id} = route.params;

  useEffect(() => {
    getByMachine(id)
      .then(response => {
        setData(response as DataProps);
      })
      .catch(error => console.error('Erro ao obter dados: ', error));
  }, [id]);

  return (
    <S.MachineInfo>
      <S.Title>{data?.name}</S.Title>
      {data && <SlideImage images={data.showImages} />}
      <S.DetailsWrapper>
        {data &&
          data.benefits.map(({type, description}, index) => (
            <IconDetail type={type} description={description} key={index} />
          ))}
      </S.DetailsWrapper>
    </S.MachineInfo>
  );
};
