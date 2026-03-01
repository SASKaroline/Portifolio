import minhaFoto from '../assets/minhafoto.jpg';

export default function About() {
  return (
    <section id="sobre" className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>Olá, sou a Karoline de Souza Alves da Silva!</h1>
          <p>
            Estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> no Centro Universitário IESB (5º semestre) e atual Estagiária de Desenvolvimento de Sistemas e Soluções no Ministério da Defesa.
          </p>
          <p>
            Meu objetivo é atuar na área de Tecnologia da Informação com foco em desenvolvimento low-code/no-code, automação de processos, criação de dashboards e apoio aos usuários, visando aplicar conhecimentos práticos e contribuir para melhorias contínuas.
          </p>
        </div>
        <div className="about-image">
          <img src={minhaFoto} alt="Foto de Karoline" />
        </div>
      </div>
    </section>
  );
}