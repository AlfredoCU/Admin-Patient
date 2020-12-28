import { useCallback, useState } from "react";
import { func } from "prop-types";
import { useForm } from "../hooks/useForm";
import { MessageError } from "./MessageError";

export const Form = ({ createAppointment }) => {
  const [inputs, handleInputChange, reset] = useForm({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    reason: ""
  });

  const [error, setError] = useState(false);

  const { patient, doctor, date, time, reason } = inputs;

  const submit = e => {
    e.preventDefault();

    if (
      patient.trim() === "" ||
      doctor.trim() === "" ||
      date.trim() === "" ||
      time.trim() === "" ||
      reason.trim() === ""
    ) {
      setError(true);
      return;
    }

    const data = { id: new Date().getTime(), ...inputs };

    createAppointment(data);
    setError(false);
    reset();
  };

  const closeError = useCallback(
    show => {
      setError(show);
    },
    [setError]
  );

  return (
    <div className="move-form">
      <h2>Crear cita</h2>

      {error && <MessageError closeError={closeError} />}

      <form onSubmit={submit}>
        <label>Nombre del paciente:</label>
        <input
          type="text"
          name="patient"
          value={patient}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Agregar paciente..."
        />

        <label>Doctor responsable:</label>
        <input
          type="text"
          name="doctor"
          value={doctor}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Agregar al doctor responsable..."
        />

        <label>Fecha:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={handleInputChange}
        />

        <label>Hora:</label>
        <input
          type="time"
          name="time"
          value={time}
          onChange={handleInputChange}
        />

        <label>Motivo de la cita:</label>
        <textarea
          name="reason"
          value={reason}
          onChange={handleInputChange}
          placeholder="Agregar el motivo de la cita..."
        ></textarea>

        <button type="submit" className="button primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
};

Form.propTypes = {
  createAppointment: func.isRequired
};
