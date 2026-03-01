// Importe a imagem aqui (coloque o nome exato do arquivo que você salvou)
import logoSomosTech from '../assets/LogoSomosTech.png'; 

export default function Community() {
  return (
    <section id="comunidade" className="community">
      <div className="community-content">
        
        {/* Caixa do Texto (O Card) */}
        <div className="community-text-box">
          <h2>Comunidade <span className="highlight">SomoS_Tech</span></h2>
          <p>
            Tenho muito orgulho de fazer parte da <strong>SomoS_Tech</strong>, uma comunidade criada por e para mulheres apaixonadas por tecnologia. Nossa missão é impulsionar a participação feminina na área, oferecendo uma rede de apoio, acolhimento e oportunidades.
          </p>
          <p>
            Atuo ativamente na equipe de <strong>Marketing</strong>. Meu trabalho envolve criar estratégias de comunicação, divulgar nossos projetos e dar visibilidade às nossas ações, ajudando a inspirar outras mulheres a serem protagonistas no mundo tech.
          </p>
          
          <div className="community-links">
            <a href="https://somostech.tech/home" target="_blank" rel="noreferrer" className="btn-primary">
              Acessar o Site
            </a>
            <a href="https://somostech.my.canva.site/midia-kit" target="_blank" rel="noreferrer" className="btn-secondary">
              Ver Mídia Kit
            </a>
          </div>
        </div>

        {/* Caixa da Imagem (O lado direito que você marcou) */}
        <div className="community-image">
          <img src={logoSomosTech} alt="Logo da Comunidade SomoS_Tech" />
        </div>

      </div>
    </section>
  );
}