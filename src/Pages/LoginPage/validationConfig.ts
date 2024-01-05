import * as yup from 'yup';

export const validationSchema = yup.object({
  userName: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'The user name must contain only Latin letters')
    .min(3, 'The minimum length of a user name is 3 characters')
    .max(25, 'The maximum length of a user name is 25 characters')
    .required('Username is required'),
});
