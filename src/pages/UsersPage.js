import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useForm } from "react-hook-form";

const UsersPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const localEmail = localStorage.getItem("userEmail");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (event) => {
    if (JSON.stringify(event) === localEmail) {
      console.log(`Bienvenido usuario con email:${JSON.stringify(event)}`);
      setUser(true);
      navigate("/training");
    } else {
      console.log("Aún no estás registrado,crea una cuenta");
      navigate("/signup");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <div>UsersPage</div>
    </>
  );
};

export default UsersPage;
