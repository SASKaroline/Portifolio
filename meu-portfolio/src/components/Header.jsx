import { useState } from 'react';

export default function Header() {
  // Estado para controlar se o menu está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para abrir/fechar o menu
  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header className="header">
      <h2>Portifólio</h2>
      
      {/* Botão do Menu Hambúrguer (só aparece no celular) */}
      <button className="menu-icon" onClick={toggleMenu}>
        {menuAberto ? '✕' : '☰'}
      </button>

      <nav>
        {/* Se menuAberto for true, adiciona a classe "open" */}
        <ul className={menuAberto ? "open" : ""}>
          <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
          <li><a href="#experiencia" onClick={toggleMenu}>Experiência</a></li>
          <li><a href="#habilidades" onClick={toggleMenu}>Habilidades</a></li>
          <li><a href="#projetos" onClick={toggleMenu}>Projetos</a></li>
          <li><a href="#comunidade" onClick={toggleMenu}>SomoS_Tech</a></li>
        </ul>
      </nav>
    </header>
  );
}