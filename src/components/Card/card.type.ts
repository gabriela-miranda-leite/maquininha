import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

export type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'MachineInfo'
>;

export interface CardProps {
  title: string;
  id: string;
  description: string;
  productImage: string;
  showImages: string[];
}
