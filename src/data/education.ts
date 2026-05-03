export interface Education {
  year: string;
  title: string;
  institution: string;
  description: string;
  advisors?: string[];
  achievements?: string[];
  keys?: string[];
}

export const educations: Education[] = [
  {
    year: "2013 - 2016",
    title: "Doutorado em Engenharia Mecânica",
    institution: "Universidade do Estado do Rio de Janeiro (UERJ)",
    description:
      'Tese: "Numerical study of CO2 dissolution in saline aquifers with deformed interface"',
    advisors: [
      "Norberto Mangiavacchi",
      "José da Rocha Miranda Pontes",
      "Anne De Wit",
    ],
    achievements: [
      "Período sanduíche na Université Libre de Bruxelles",
      "Bolsista CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)",
    ],
    keys: [
      "Método dos elementos finitos",
      "Escoamentos em meios porosos",
      "Sequestro de gás carbônico",
      "Dissolução convectiva",
    ],
  },
  {
    year: "2011 - 2013",
    title: "Mestrado em Engenharia Metalúrgica e de Materiais",
    institution: "Universidade Federal do Rio de Janeiro (COPPE/UFRJ)",
    description:
      'Dissertação: "Hidrodinâmica de células eletroquímicas com eletrodo semi-esférico rotatório"',
    advisors: ["José da Rocha Miranda Pontes", "Norberto Mangiavacchi"],
    achievements: [
      "Bolsista CNPQ (Conselho Nacional de Pesquisa)",
      "Bolsista FAPERJ Nota 10(Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ)",
    ],
    keys: [
      "Corrosão",
      "Escoamento no disco rotatório",
      "Eletrodo semi-esférico",
      "Método dos elementos finitos",
      "Método das diferenças finitas",
    ],
  },
  {
    year: "2015 - 2021",
    title: "Graduação em Engenharia de Produção",
    institution:
      "Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET/RJ)",
    description:
      'Título: "Projetos de Pesquisa e Desenvolvimento: Uma Breve Avaliação com Uso de Indicadores"',
    advisors: ["Magda Lauri Gomes Leite"],
  },
  {
    year: "2006 - 2010",
    title: "Licenciatura Plena em Matemática",
    institution:
      "Universidade Federal Rural do Rio de Janeiro - Campus Nova Iguaçu (UFRRJ-IM)",
    description: 'Título: "A Matemática e o Cotidiano"',
    advisors: ["Benaia Sobreira de Jesus Lima"],
  },
];
