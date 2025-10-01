import { useState } from "react";
import Main from "../pages/components/layouts/Main";
import api from "../services/api";

export default function Dashboard({ onLogout }) {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post(
        "/emails/send",
        { to, subject, body },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage("Email enviado com sucesso!");
      setTo("");
      setSubject("");
      setBody("");
    } catch (err) {
      setMessage(
        "Erro ao enviar email: " + (err.response?.data?.error || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Main onLogout={onLogout}>
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6 text-center">Enviar E-mail</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Para</label>
                    <input type="email" placeholder="destinatario@email.com" value={to} onChange={(e) => setTo(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Assunto</label>
                    <input type="text" placeholder="Digite o assunto" value={subject} onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Corpo do e-mail</label>
                    <textarea rows="6" placeholder="Escreva sua mensagem aqui..." value={body} onChange={(e) => setBody(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                </div>

                <button type="submit" disabled={loading} 
                className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition disabled:opacity-50">
                    {loading ? "Enviando..." : "Enviar E-mail"}
                </button>
                </form>

                {message && (
                <p className="mt-4 text-center text-sm font-medium text-gray-700">
                    {message}
                </p>
                )}
            </div>
        </div>
    </Main>
  );
}
