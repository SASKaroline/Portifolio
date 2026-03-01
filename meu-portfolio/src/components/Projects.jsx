export default function Projects() {
  // Lista dos seus projetos
  const meusProjetos = [
    {
      id: 1,
      nome: 'Meu Primeiro Portfólio',
      descricao: 'Portfólio desenvolvido em React para apresentar minhas habilidades e projetos como desenvolvedora.',
      linkGithub: 'https://github.com/SASKaroline/Portifolio'
    },
    {
      id: 2,
      nome: 'Projeto em Breve',
      descricao: 'Um novo sistema que estou desenvolvendo no meu estágio/estudos.',
      linkGithub: 'https://github.com/SASKaroline'
    }
  ];

  return (
    <section id="projetos" className="projects">
      <h2>Meus Projetos</h2>
      <div className="lista-projetos">
        {meusProjetos.map((projeto) => (
          <div key={projeto.id} className="card">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.linkGithub} target="_blank" rel="noreferrer">
              Ver no GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}