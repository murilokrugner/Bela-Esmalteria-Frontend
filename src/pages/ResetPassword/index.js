import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logobela.png';

import { resetPasswordRequest } from '~/store/modules/password/actions';

import '~/routes/index';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha terá que ter no minimo 6 caracteries')
    .required('A senha é obrigatória!'),
});

export default function ResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.password.loading);

  function handleSubmit({ email, password }) {
    dispatch(resetPasswordRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="logobela" height="500px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Digite seu e-mail"
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua nova senha secreta"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Alterar'}</button>
        <footer>v1.0 Beta</footer>
      </Form>
    </>
  );
}
