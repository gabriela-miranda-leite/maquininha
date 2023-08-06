import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

export type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MachineInfo'
>;

interface BenefitsProps {
  type: string;
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
