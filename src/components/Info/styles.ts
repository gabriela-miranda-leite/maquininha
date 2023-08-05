import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

import Ionicons from 'react-native-vector-icons/Feather';

export const Info = styled.View``;

export const Description = styled.Text`
  font-family: ${defaultTheme.fonts.family.primary};
  font-weight: ${defaultTheme.fonts.weight.medium};
`;

export const Icon = styled(Ionicons)``;
