// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {shot} from '~/@types/dtos/shot';

export interface VaccineDateProps {
  title: string;
  shot: shot;
  date: string;
  onPress?: () => void;
}

/**
 * Style
 */

export interface BadgeLeftProps {
  color: string;
}
export interface ChipProps {
  color: string;
}
