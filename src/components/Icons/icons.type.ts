import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes';

export type ProfileScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  'Machines'
>;

type IconsType = 'ListBullets' | 'Question';

export interface IconsProps {
  type: IconsType;
}
