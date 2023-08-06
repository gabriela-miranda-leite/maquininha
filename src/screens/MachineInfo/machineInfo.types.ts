import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import {IconDetailType} from '../../components/IconDetail/iconDetail.type';

type MachineInfoScreenRouteProp = RouteProp<RootStackParamList, 'MachineInfo'>;
export type MachineInfoProps = {
  route: MachineInfoScreenRouteProp;
};
interface BenefitsProps {
  type: IconDetailType;
  description: string;
}

export interface DataProps {
  name: string;
  description: string;
  image: string;
  id: string;
  benefits: BenefitsProps[];
  showImages: string[];
}
