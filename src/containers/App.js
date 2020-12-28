import { Form, Appointments } from "../components";
import { useState, useCallback, useEffect } from "react";

export const App = () => {
  const initialState = JSON.parse(localStorage.getItem("appointments")) || [];

  const [appointments, setAppointments] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const createAppointment = useCallback(
    data => {
      setAppointments(d => [...d, data]);
    },
    [setAppointments]
  );

  const deleteAppointment = useCallback(
    id => {
      const newData = appointments.filter(item => item.id !== id);
      setAppointments(newData);
    },
    [appointments, setAppointments]
  );

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="content-form">
          <Form createAppointment={createAppointment} />
        </div>
        <div className="content-list">
          <Appointments data={appointments} deleteA={deleteAppointment} />
        </div>
      </div>
    </>
  );
};
