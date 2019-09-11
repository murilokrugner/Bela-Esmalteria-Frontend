import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logobela.png';

import api from '~/services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function RecoverPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const response = api.post('/forgot_password');

  function handleSubmit({ email }) {
    dispatch(response(email));
  }

  return (
    <>
      <img src={logo} alt="logobela" height="500px" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Digite seu e-mail para recuperar a senha"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Enviar'}</button>
        <Link to="/">Lembrei minha senha :)</Link>
        <footer>v1.0 Beta</footer>
      </Form>
    </>
  );
}
