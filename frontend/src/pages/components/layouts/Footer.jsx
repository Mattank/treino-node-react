export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 mt-auto">
      <div className="container mx-auto px-4 py-4 text-center text-sm">
        © {new Date().getFullYear()} - Sistema Send Email de Treino. Todos os direitos reservados.
      </div>
    </footer>
  );
}
