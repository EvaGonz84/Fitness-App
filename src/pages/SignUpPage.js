import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";


const SignUpPage = () => {


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
      console.log("Ya estás registrado");
      navigate("/users");
    } else {
      localStorage.setItem("userEmail", JSON.stringify(event));
      console.log(`Bienvenido usuario con email:${JSON.stringify(event)}`);
      setUser(true);
      navigate('/training');
    }
  };

  return (
    <>
      <h3>CREATE YOUR ACCOUNT</h3>
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
    </>
  );
};

export default SignUpPage;
