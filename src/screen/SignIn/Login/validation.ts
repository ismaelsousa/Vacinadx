import * as yup from 'yup';

export const schemaLogin = yup.object({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'Pelo menos 6 caracteres'),
});
