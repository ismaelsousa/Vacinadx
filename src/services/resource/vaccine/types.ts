/* eslint-disable @typescript-eslint/no-unused-vars */
import {VaccineDTO} from '~/@types/dtos/vaccine';

export interface GetVaccineRequest extends VaccineDTO {
  search?: string;
}
