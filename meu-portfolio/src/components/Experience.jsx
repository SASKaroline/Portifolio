export default function Experience() {
  return (
    <section id="experiencia" className="experience">
      <h2>Experiência <span className="highlight">Profissional</span></h2>
      
      <div className="timeline">
        {/* Experiência Atual */}
        <div className="timeline-item">
          <h3>Estagiária em Desenvolvimento de Sistemas</h3>
          <p className="company">Ministério da Defesa - Esplanada | Out 2025 - Atual</p>
          <ul>
            <li>Desenvolvimento de aplicações low-code em Power Apps e fluxos automatizados com Power Automate.</li>
            <li>Desenvolvimento e manutenção de sites corporativos em SharePoint.</li>
            <li>Construção de dashboards interativos no Power BI.</li>
            <li>Produção de documentação técnica e apoio na análise de processos (BPMN).</li>
          </ul>
        </div>

        {/* Experiência Anterior */}
        <div className="timeline-item">
          <h3>Estagiária de Suporte Técnico</h3>
          <p className="company">Ministério da Defesa - Esplanada | Dez 2024 - Set 2025</p>
          <ul>
            <li>Atendimento no Help Desk e suporte direto aos usuários da rede.</li>
            <li>Formatação, configuração de máquinas e instalação de softwares.</li>
            <li>Gestão de Proxy, Certificados e configuração de endereçamento IPv4.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}