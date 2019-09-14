import React, { useEffect, useMemo, useState } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Date } from './styles';

import api from '~/services/api';

export default function DashboardClient() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      const data = response.data.map(appointment => ({
        ...appointment,
      }));

      setAppointments(data);
    }

    loadAppointments();
  }, [appointments]);

  // const firstDate = parseISO('2018-04-01 16:00:00');
  /* const formattedDate = format(data, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
    locale: pt,
  }); */

  return (
    <Container>
      <header>
        <h1>Meus Agendamentos</h1>
      </header>
      <ul>
        {appointments.map(appointment => (
          <Date key={appointment}>
            <strong>{appointment.date}</strong>
          </Date>
        ))}
      </ul>
    </Container>
  );
}
