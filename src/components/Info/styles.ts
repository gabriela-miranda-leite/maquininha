import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

export const Info = styled.View``;

export const Description = styled.Text.attrs({numberOfLines: 1})`
  font-family: ${defaultTheme.fonts.family.primary};
  font-weight: ${defaultTheme.fonts.weight.medium};
`;
