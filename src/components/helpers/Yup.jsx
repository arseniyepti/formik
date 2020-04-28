import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .typeError('Неверный формат введенных данных')
    .max(50, 'Не более 50 символов')
    .required('Поле не заполнено'),
  password: Yup.string()
    .typeError('Неверный формат введенных данных')
    .max(40, 'Не более 40 символов')
    .min(8, 'Не менее 8 символов')
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
      'Пароль должен состоять из латинских букв и цифр, а также содержать хотя бы одну строчную, заглавную буквы и цифры'
    )
    .required('Поле не заполнено'),
  repeatPassword: Yup.string()
    .typeError('Неверный формат введенных данных')
    .oneOf([Yup.ref('password')], 'Пароли не совпадают')
    .required('Поле не заполнено'),
  email: Yup.string()
    .typeError('Неверный формат введенных данных')
    .email('Некорректный email адрес')
    .required('Поле не заполнено'),
  website: Yup.string()
    .url('Некорректный url адрес')
    .typeError('Неверный формат введенных данных')
    .max(50, 'Не более 50 символов'),
  age: Yup.number()
    .typeError('Неверный формат введенных данных')
    .max(50, 'Не более 50 символов')
    .required('Поле не заполнено'),
  skills: Yup.string()
    .typeError('Неверный формат введенных данных')
    .max(50, 'Не более 50 символов'),
  acceptTerms: Yup.boolean().oneOf([true], 'Необходимо принять соглашение'),
});

export default validationSchema;
