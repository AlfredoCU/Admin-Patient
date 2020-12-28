import { number, string, func } from "prop-types";

export const ItemAppointment = ({
  id,
  patient,
  doctor,
  date,
  time,
  reason,
  deleteA
}) => {
  return (
    <div className="appointment">
      <p>
        Número de cita: <span>{id}</span>
      </p>
      <p>
        Nombre del paciente: <span>{patient}</span>
      </p>
      <p>
        Doctor responsable: <span>{doctor}</span>
      </p>
      <p>
        Fecha: <span>{date}</span>
      </p>
      <p>
        Hora: <span>{time}</span>
      </p>
      <p>
        Motivo de la cita: <span>{reason}</span>
      </p>
      <button
        type="button"
        className="button primary delete"
        onClick={() => deleteA(id)}
      >
        Eliminar
      </button>
    </div>
  );
};

ItemAppointment.propTypes = {
  id: number.isRequired,
  patient: string.isRequired,
  doctor: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  reason: string.isRequired,
  deleteA: func.isRequired
};
