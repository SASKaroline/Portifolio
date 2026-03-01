export default function Projects() {
  // Lista dos seus projetos
  const meusProjetos = [
    {
      id: 1,
      nome: 'Meu Primeiro Projeto',
      descricao: 'Projeto desenvolvido em HTML/CSS de um site de leitura criado no 1° semestre da faculdade.',
      linkGithub: 'https://github.com/SASKaroline/Roadkesbo-Final'
    },
    {
      id: 2,
      nome: 'Projeto de leitura',
      descricao: 'Um aplicativo mobile de registro de leitura que eu criei na faculdade.',
      linkGithub: 'https://github.com/SASKaroline/BookVerse'
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