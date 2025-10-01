import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Register = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      if (onSuccess) onSuccess();
    } catch (err) {
      const apiError = err.response?.data?.error;

      if (typeof apiError === "string") {
        setError(apiError);
      } else if (apiError?.message) {
        setError(apiError.message);
      } else {
        setError("Erro no login. Tente novamente.");
      }
    }finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-blue-900">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-semibold text-gray-700">E-mail</label>
          <input id="email" type="email" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm font-semibold text-gray-700">
            Senha
          </label>
          <input id="password" type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        </div>
        
        <div className="space-y-3">
          <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50">
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <button type="button" className="w-full border border-gray-300 py-3 rounded-md font-medium hover:bg-gray-100 transition" onClick={Register}>
            Registrar
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}
      </form>
    </div> 
  );
}
