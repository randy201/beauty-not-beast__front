import { useState } from "react";
import Input from "../components/Input";
import "../style/Login.css";
import "../style/Input.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  // eslint-disable-next-line no-unused-vars
  const [mail, setMail] = useState("");
  const [motDePass, setMotDePass] = useState("");

  const handleChange = (e) => {
    setMail(e);
  };

  const ChangeMotDepass = (e) => {
    setMotDePass(e);
  };

  const navigate = useNavigate();
  const connect = async () => {
    try {
      // const response = await axios.post(
      //   "https://localhost:7263/Login",
      //   personne
      // );
      //const data = response.data;
      //console.log(data);
      //if (data != null) {
      navigate("/home");
      //} else {
      //   alert(data);
      // }
    } catch (error) {
      alert(error.message);
    }
  };

  const style = {
    width: "100dvw",
    height: "100dvh",
  };

  return (
    <div
      style={style}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="card">
        <h2>Login</h2>
        <Input
          type={"text"}
          name="mail"
          id={"mail"}
          value={mail}
          onChange={handleChange}
        />

        <Input
          type={"text"}
          name="motdepass"
          id={"motDePass"}
          value={motDePass}
          onChange={ChangeMotDepass}
        />

        <div className="button" onClick={connect}>
          Se connecter<span className="button-border"></span>
        </div>
      </div>
    </div>
  );
}
