import { useNavigate, Link } from "react-router-dom";

export default function Header({ onLogout }) {

  const handleLogout = async () => {
    if (onLogout) onLogout();
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-bold">Email Sender</h1>
        <nav className="space-x-6 flex items-center">
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md font-medium transition">Logout</button>
        </nav>
        </div>
    </header>
  );
}
