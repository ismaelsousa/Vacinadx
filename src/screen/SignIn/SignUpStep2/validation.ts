import * as yup from 'yup';

export const schemaSignUpStep2 = yup.object({
  password: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'Pelo menos 8 caracteres'),
  confirmPassword: yup
    .string()
    .required('Campo obrigatório')
    .min(8, 'Pelo menos 8 caracteres')
    .oneOf([yup.ref('password')], 'Senhas diferentes'),
});
