import { memo } from "react";
import { arrayOf, shape, number, string, func } from "prop-types";
import { ItemAppointment } from "./ItemAppointment";

export const Appointments = memo(({ data, deleteA }) => {
  return (
    <>
      <h2>Administra tus citas</h2>
      {data.length > 0 ? (
        data &&
        data.map(item => (
          <ItemAppointment key={item.id} {...item} deleteA={deleteA} />
        ))
      ) : (
        <h2>No hay citas</h2>
      )}
    </>
  );
});

// En React -> array, object y any son invalidos.
Appointments.propTypes = {
  data: arrayOf(
    shape({
      id: number.isRequired,
      patient: string.isRequired,
      doctor: string.isRequired,
      date: string.isRequired,
      time: string.isRequired,
      reason: string.isRequired
    })
  ).isRequired,
  deleteA: func.isRequired
};
