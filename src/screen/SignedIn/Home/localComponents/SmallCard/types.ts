/* eslint-disable @typescript-eslint/no-unused-vars */
import {NameIconTypes} from '~/constants/icons';

export interface Props {
  title: string;
  icon: NameIconTypes;
  onPress?: () => void;
}
