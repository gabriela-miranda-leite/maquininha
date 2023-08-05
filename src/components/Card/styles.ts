import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

export const Card = styled.View`
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
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.md};
  font-weight: ${defaultTheme.fonts.weight.bold};
`;

export const Description = styled.Text.attrs({numberOfLines: 1})`
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.sm};
  font-weight: ${defaultTheme.fonts.weight.regular};
`;

export const ProductImage = styled.Image.attrs({resizeMode: 'contain'})`
  width: 15%;
`;
