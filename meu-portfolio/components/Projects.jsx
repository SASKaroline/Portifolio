import React from 'react';

// Aqui ficam os dados dos seus projetos
const meusProjetos = [
  {
    id: 1,
    nome: 'Sistema de Gestão',
    descricao: 'Um sistema para gerenciar tarefas usando React e Node.js.',
    linkGithub: 'https://github.com/seu-usuario/projeto1'
  },
  {
    id: 2,
    nome: 'Landing Page',
    descricao: 'Página responsiva criada com HTML e CSS modernos.',
    linkGithub: 'https://github.com/seu-usuario/projeto2'
  }
];

export default function Projects() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="lista-projetos">
        {/* O React passa por cada projeto e cria um card na tela */}
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