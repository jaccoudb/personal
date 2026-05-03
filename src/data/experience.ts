export interface Experience {
  year: string;
  title: string;
  company: string;
  description: string;
  type?: string;
  details?: string[];
}

  // Função para extrair ano inicial do período
  const getStartYear = (period: string) => {
    const match = period.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  };

  // Experiências profissionais
export const experiences: Experience[] = [
    {
      year: '2026 - Atual',
      title: 'Professora Adjunta I',
      company: 'Universidade do Estado do Rio de Janeiro (UERJ)',
      description: 'Professora na área de Fenômenos de Transporte no Departamento de Engenharia Mecânica.',
      type: 'work',
      details: ['Carga horária: 40 horas', 'Regime: Servidor público']
    },
    {
      year: '2025 - Atual',
      title: 'Professora Permanente',
      company: 'UERJ - Pós-graduação em Engenharia Mecânica',
      description: 'Atua como professora permanente do corpo docente da Pós-graduação em Engenharia Mecânica.',
      type: 'work',
      details: ['Carga horária: 20 horas']
    },
    {
      year: '2023 - Atual',
      title: 'Pesquisadora',
      company: 'Instituto de Pesquisas da Marinha (IPqM)',
      description: 'Pesquisadora vinculada ao Instituto de Pesquisas da Marinha.',
      type: 'work',
    },
    {
      year: '2023 - 2024',
      title: 'Professora Colaboradora',
      company: 'UERJ - Pós-graduação em Engenharia Mecânica',
      description: 'Professor Colaborador no Programa de Pós-graduação em Engenharia Mecânica da UERJ.',
      type: 'work',
      details: ['Carga horária: 20 horas']
    },
    {
      year: '2022',
      title: 'Professora Substituta',
      company: 'Universidade do Estado do Rio de Janeiro (UERJ)',
      description: 'Professora substituta na UERJ.',
      type: 'work',
      details: ['Carga horária: 20 horas']
    },
    {
      year: '2020 - 2021',
      title: 'Professora Substituta',
      company: 'Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)',
      description: 'Professora de Matemática no Ensino Básico, Técnico e Tecnológico para os cursos técnicos de: Automação Industrial, Enfermagem, Informática e Telecomunicações.',
      type: 'work',
      details: ['Carga horária: 40 horas']
    },
    {
      year: '2019 - 2020',
      title: 'Pesquisadora',
      company: 'Ministério da Marinha (MM)',
      description: 'Bolsista FAPERJ através do Edital FAPERJ nº 06/2019 - Programa "Apoio à Inserção de Pesquisadores em Empresas".',
      type: 'work',
      details: ['Carga horária: 20 horas', 'Bolsista']
    },
    {
      year: '2019',
      title: 'Professora Substituta',
      company: 'Universidade do Estado do Rio de Janeiro (UERJ)',
      description: 'Professora Substituta na UERJ.',
      type: 'work',
      details: ['Carga horária: 8 horas']
    },
    {
      year: '2017 - 2018',
      title: 'Bolsista',
      company: 'Universidade do Estado do Rio de Janeiro (UERJ)',
      description: 'Bolsista com carga horária de 40 horas.',
      type: 'work',
    },
    {
      year: '2017 - 2019',
      title: 'Estagiária',
      company: 'Petróleo Brasileiro S.A. (PETROBRAS)',
      description: 'Estágio obrigatório do curso Engenharia de Produção na gerência de comercialização de gás natural liquefeito (GNL).',
      type: 'work',
      details: ['Carga horária: 30 horas']
    },
    {
      year: '2016 - 2017',
      title: 'Elaboradora de Itens',
      company: 'Fundação CECIERJ',
      description: 'Participação na elaboração de banco de itens com a metodologia de Teoria de Resposta ao Item - TRI (metodologia utilizada no ENEM).',
      type: 'work',
      details: ['Carga horária: 20 horas', 'Bolsista']
    },
    {
      year: '2012 - 2013',
      title: 'Professora Substituta',
      company: 'Universidade Federal Rural do Rio de Janeiro (UFRRJ)',
      description: 'Professora substituta na UFRRJ.',
      type: 'work',
      details: ['Carga horária: 20 horas']
    },
    {
      year: '2010',
      title: 'Estagiária',
      company: 'Instituto Unibanco (IU)',
      description: 'Atuação em aulas de tutoria na disciplina de Matemática junto ao grupo de alunos com atividades propostas na apostila de estudo do Projeto Entre Jovens.',
      type: 'work',
      details: ['Carga horária: 10 horas', 'Estágio']
    },
    {
      year: '2009 - 2010',
      title: 'Estagiária',
      company: 'Prefeitura da Cidade de Nova Iguaçu',
      description: 'Atuação em suporte na área financeira referentes a cálculos financeiros na Secretaria Municipal de Educação.',
      type: 'work',
      details: ['Carga horária: 30 horas', 'Estágio']
    },
    {
      year: '2009',
      title: 'Estagiária',
      company: 'Instituto Unibanco (IU)',
      description: 'Atuação em aulas de tutoria na disciplina de Matemática junto ao grupo de alunos com atividades propostas na apostila de estudo do Projeto Entre Jovens.',
      type: 'work',
      details: ['Carga horária: 4 horas', 'Estágio']
    },
    {
      year: '2008 - 2009',
      title: 'Bolsista',
      company: 'Universidade Federal do Rio de Janeiro (UFRJ)',
      description: 'Atuação na aplicação de um survey domiciliar (questionário com cerca de 200 perguntas) e na realização de um screening, que antecedeu o survey.',
      type: 'work',
      details: ['Carga horária: 20 horas', 'Bolsista']
    },
    {
      year: '2021 - 2022',
      title: 'Pós-Doutorado',
      company: 'Universidade do Estado do Rio de Janeiro (UERJ)',
      description: 'Bolsista FAPERJ. Grande área: Ciências Exatas e da Terra / Área: Matemática / Subárea: Matemática Aplicada / Especialidade: Biomatemática.',
      type: 'postdoc',
    },
    {
      year: '2017',
      title: 'Pós-Doutorado',
      company: 'University of Glasgow (GLASGOW), Escócia',
      description: 'Bolsista da University of Glasgow. Grande área: Engenharias / Área: Engenharia Biomédica / Subárea: Bioengenharia / Especialidade: Modelagem de Fenômenos Biológicos.',
      type: 'postdoc',
    },
  ];

  // Disciplinas ministradas
export const teaching = [
    { period: '02/2026 - Atual', level: 'Graduação', course: 'Fenômenos de Transporte', institution: 'UERJ' },
    { period: '03/2025 - 07/2025', level: 'Pós-Graduação', course: 'Tópicos especiais - Métodos Matemáticos em Engenharia: Fundamentos de Análise Funcional', institution: 'UERJ' },
    { period: '09/2023 - 12/2023', level: 'Pós-Graduação', course: 'MECÂNICA DOS FLUIDOS COMPUTACIONAL I (participação em turma)', institution: 'UERJ' },
    { period: '03/2023 - 08/2023', level: 'Pós-Graduação', course: 'Escoamento em Meios Porosos (participação)', institution: 'UERJ' },
    { period: '02/2022 - 04/2022', level: 'Graduação', course: 'Fenômenos de Transporte', institution: 'UERJ' },
    { period: '08/2019 - 12/2019', level: 'Graduação', course: 'Transferência de Calor II', institution: 'UERJ' },
    { period: '08/2019 - 12/2019', level: 'Graduação', course: 'Fundamentos de Transferência de Calor e de Massa', institution: 'UERJ - Engenharia Ambiental e Sanitária' },
    { period: '01/2013 - 05/2013', level: 'Graduação', course: 'Estatística Aplicada ao Turismo', institution: 'UFRRJ' },
    { period: '04/2012 - 05/2013', level: 'Graduação', course: 'Geometria Euclidiana', institution: 'UFRRJ' },
    { period: '04/2012 - 12/2012', level: 'Graduação', course: 'Geometria Analítica', institution: 'UFRRJ' },
    { period: '01/2020 - 05/2021', level: 'Ensino Técnico', course: 'Matemática', institution: 'CEFET/RJ' },
  ];

  // Ordenar arrays por data (mais recente primeiro)
export const sortedExperiences = [...experiences].sort((a, b) => {
    return getStartYear(b.year) - getStartYear(a.year);
  });

export const sortedTeaching = [...teaching].sort((a, b) => {
    return getStartYear(b.period) - getStartYear(a.period);
  });