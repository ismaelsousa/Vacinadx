/* eslint-disable @typescript-eslint/no-unused-vars */
import {PlaceDTO} from '~/@types/dtos/place';

export interface GetPlacesRequest extends PlaceDTO {
  search?: string;
}
