import styled from 'styled-components/native';
import {defaultTheme} from '../../theme';

interface OptionImageProps {
  isImageMain: boolean;
}

export const SlideImage = styled.View`
  align-items: center;
  display: flex;
  row-gap: ${defaultTheme.spacing.xl};
  width: 100%;
`;

export const MainImage = styled.Image.attrs({resizeMode: 'contain'})`
  height: 200px;
  width: 150px;
`;

export const OptionWrapper = styled.View`
  column-gap: ${defaultTheme.spacing.sm};
  display: flex;
  flex-direction: row;
`;

export const OptionImage = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<OptionImageProps>`
  border: 2px solid
    ${({isImageMain}) =>
      isImageMain
        ? defaultTheme.colors.primary
        : defaultTheme.colors.text.light};
  border-radius: 10px;
  padding: ${defaultTheme.spacing.md};
`;

export const SmallImage = styled.Image.attrs({resizeMode: 'contain'})`
  height: 100px;
  width: 60px;
`;
