import * as yup from 'yup';

export const schemaLogin = yup.object({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().min(6, 'Pelos menos 6 caracteres'),
});
