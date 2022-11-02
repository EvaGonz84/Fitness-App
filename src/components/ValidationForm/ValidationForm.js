import React from "react";
import { useForm } from "react-hook-form";

const ValidationForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <input
          type="text"
          name="email"
          autoComplete="off"
          placeholder="Email Address"
          {...register("email", {
            required: {
              value: true,
              message: "Se requiere un email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "El formato email no es correcto",
            },
          })}
        ></input>
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
        <button>Continue</button>
      </div>
    </form>
  );
};

export default ValidationForm;
