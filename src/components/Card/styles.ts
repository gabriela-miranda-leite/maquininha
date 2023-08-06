import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

export const Card = styled.TouchableOpacity.attrs({activeOpacity: 0.1})`
  align-items: center;
  flex-direction: row;
  height: 120px;
  width: 100%;
`;

export const InfoWrapper = styled.View`
  padding-left: ${defaultTheme.spacing.md};
  row-gap: ${defaultTheme.spacing.xsm};
  width: 85%;
`;

export const Title = styled.Text.attrs({numberOfLines: 1})`
  color: ${defaultTheme.colors.text.dark};
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.md};
  font-weight: ${defaultTheme.fonts.weight.bold};
`;

export const Description = styled.Text.attrs({numberOfLines: 1})`
  color: ${defaultTheme.colors.text.light};
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.sm};
  font-weight: ${defaultTheme.fonts.weight.regular};
`;

export const ProductImage = styled.Image.attrs({resizeMode: 'contain'})`
  width: 80px;
  height: 80px;
`;
