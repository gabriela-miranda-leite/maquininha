import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

export const MachineInfo = styled.ScrollView`
  flex: 1;
  padding: ${defaultTheme.spacing.md};
`;

export const Title = styled.Text.attrs({numberOfLines: 1})`
  color: ${defaultTheme.colors.text.dark};
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.xl};
  font-weight: ${defaultTheme.fonts.weight.light};
  margin-bottom: ${defaultTheme.spacing.xl};
  text-align: center;
`;

export const DetailsWrapper = styled.View`
  margin-bottom: ${defaultTheme.spacing.xl};
  padding: ${defaultTheme.spacing.xl} 0;
  row-gap: ${defaultTheme.spacing.md};
`;
