import Word from "../../assets/img/word.jpg";
import "./styles/_login.sass";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleEnter = (env: React.FormEvent<HTMLInputElement | unknown>) => {
    env.preventDefault();
    navigate("/Home");
  };
  return (
    <>
      <div className="container-form">
        <img src={Word} />
        <div className="container">
          <form action="#">
            <input type="text" placeholder="Digite o seu E-mail" />
            <input type="text" placeholder="Digite sua Senha" />
            <a href="">Esqueceu a Senha?</a>
            <div className="btns">
              <button className="button-enter" onClick={handleEnter}>Entrar</button>
              <button className="button-register">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
