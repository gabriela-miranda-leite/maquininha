import {RouteProp} from '@react-navigation/native';
export interface MachineInfoProps {
  route: RouteProp<
    {
      params: {
        id: string;
      };
    },
    'params'
  >;
}

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
