import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {
      navigate("/dashboard");
    } else {
      alert(
        "Invalid Email or Password\n\nEmail: admin@gmail.com\nPassword: 123456"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="left-panel">
        <h1>🎓 Student Management System</h1>

        <p>
          Manage Students, Marks,
          Topper, Average and Reports
          in one Dashboard.
        </p>
      </div>

      <div className="login-box">

        <form onSubmit={handleLogin}>

          <h2>Welcome Back</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            Demo Login:
            <br />
            admin@gmail.com
            <br />
            123456
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;