import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Services } from './styles';

import api from '~/services/api';

export default function DashboardClient() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function loadServices() {
      const response = await api.get('services');

      const data = response.data.map(service => ({
        ...service,
      }));

      setServices(data);
    }

    loadServices();
  }, []);

  return (
    <Container>
      <header>
        <h1>Escolha um atendimento</h1>
      </header>
      <ul>
        {services.map(service => (
          <Services key={service}>
            <strong>
              <Link to="/selectdate">{service.name}</Link>
            </strong>
            <span>
              Tempo de duração de aproximadamente {service.duration} Hora
            </span>
          </Services>
        ))}
      </ul>
    </Container>
  );
}
