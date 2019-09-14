import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import Notifications from '~/components/Notifications';
import logo from '~/assets/logobela.png';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <Link to="/feed">FEED</Link>
            </li>
            <li>
              <Link to="/dashboardclient">MEUS AGENDAMENTOS</Link>
            </li>
            <li>
              <Link to="/selectservice">AGENDAR</Link>
            </li>
          </ul>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profileclient">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar
                  ? profile.avatar.url
                  : 'https://api.adorable.io/avatars/50/abott@adorable.pngprofile.avatar_url || '
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
