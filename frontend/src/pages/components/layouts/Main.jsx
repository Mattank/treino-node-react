import Header from "./Header";
import Footer from "./Footer";

export default function Main({ children, onLogout }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onLogout={onLogout}/>
      
      <main className="flex-grow container mx-auto px-4 py-6 flex items-center justify-center">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
