import { useState } from "react";

export const useForm = (quantityInput = {}) => {
  const [inputs, setInputs] = useState(quantityInput);

  const reset = () => {
    setInputs(quantityInput);
  };

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  return [inputs, handleInputChange, reset];
};
