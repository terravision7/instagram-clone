import Yup from "./validate";

export const RegisterSchema = Yup.object().shape({
    email: Yup.string()
      .required()
      .email(),
      full_name: Yup.string()
      .required(),
    username: Yup.string()
      .required(),
    password: Yup.string()
      .required()
})
