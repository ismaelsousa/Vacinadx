/* eslint-disable @typescript-eslint/no-unused-vars */
import {VaccineDTO} from '~/@types/dtos/vaccine';

export interface VaccineCardProps {
  vaccine: VaccineDTO;
  index?: number;
}

/**
 * Styles
 */

export interface BadgeLeftProps {
  color: string;
}
export interface ChipProps {
  color: string;
}
