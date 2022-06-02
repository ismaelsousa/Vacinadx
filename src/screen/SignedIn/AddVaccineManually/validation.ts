import * as yup from 'yup';

export const schemaAddVaccineManually = yup.object({
  name: yup.string().required('Campo obrigatório'),
  brand: yup.string().required('Campo obrigatório'),
  applicationDate: yup.string().required('Campo obrigatório'),
  applicationLocation: yup.string().required('Campo obrigatório'),
  nextApplicationDate: yup.string(),
});
