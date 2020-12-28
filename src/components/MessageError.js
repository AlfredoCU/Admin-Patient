import { func } from "prop-types";

export const MessageError = ({ closeError }) => (
  <p className="alert-error">
    <span onClick={() => closeError(false)}>&times;</span>
    Todos los campos son obligatorios.
  </p>
);

MessageError.propTypes = {
  closeError: func.isRequired
};
