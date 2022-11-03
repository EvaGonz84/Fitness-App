import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../pages/HomePage/HomePage.styles";
import { ContainerForm, InputEmail, Span } from "./ValidationForm.styles";

const ValidationForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <ContainerForm>
        <InputEmail
          type="text"
          name="email"
          autoComplete="off"
          placeholder="Email Address"
          {...register("email", {
            required: {
              value: true,
              message: "An email is required",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "The email is not correct",
            },
          })}
        ></InputEmail>
        {errors.email && <Span>{errors.email.message}</Span>}

        <Button>Continue</Button>
      </ContainerForm>
    </form>
  );
};

export default ValidationForm;
