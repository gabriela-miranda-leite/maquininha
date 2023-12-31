import styled from 'styled-components/native';
import {ListRenderItem} from 'react-native';
import {DataProps} from './machines.types';
import {defaultTheme} from '../../theme';

interface StyledFlatListProps<T> {
  data: T[];
  renderItem: ListRenderItem<T>;
}

export const MachinesWrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Machines = styled.FlatList<StyledFlatListProps<DataProps>>`
  padding: ${defaultTheme.spacing.lg};
`;

export const Header = styled.View``;

export const Title = styled.Text.attrs({numberOfLines: 1})`
  color: ${defaultTheme.colors.text.dark};
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.lg};
  font-weight: ${defaultTheme.fonts.weight.bold};
  margin-bottom: ${defaultTheme.spacing.xsm};
`;

export const Description = styled.Text.attrs({numberOfLines: 2})`
  color: ${defaultTheme.colors.text.light};
  font-family: ${defaultTheme.fonts.family.primary};
  font-size: ${defaultTheme.fonts.sizes.md};
  font-weight: ${defaultTheme.fonts.weight.semiBold};
  margin-bottom: ${defaultTheme.spacing.md};
`;

export const Footer = styled.View`
  margin-bottom: ${defaultTheme.spacing.lg};
`;
