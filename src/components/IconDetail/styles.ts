import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

export const IconDetail = styled.View`
  flex-direction: row;
  column-gap: ${defaultTheme.spacing.md};
`;

export const TextDetail = styled.Text.attrs({numberOfLines: 1})`
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.md};
  font-weight: ${defaultTheme.fonts.weight.semiBold};
`;
