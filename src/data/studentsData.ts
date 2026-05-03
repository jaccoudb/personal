// src/data/studentsData.ts
export interface Student {
  id: number;
  name: string;
  title: string;
  level: string;
  institution: string;
  startYear: number;
  endYear?: number;
  status: 'Em andamento' | 'Concluído';
  role: 'Orientador' | 'Coorientador' | 'Supervisora';
  funding?: string;
  description?: string;
}

export const ongoingProjects: Student[] = [
  // Dissertação de mestrado
  {
    id: 1,
    name: "Shaydez Salvador da Silva Pereira",
    title: "Numerical Simulation of an Aerodynamic Braking System for Velocity and Altitude Regulation in Rocket Flight",
    level: "Mestrado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2025,
    status: "Em andamento",
    role: "Orientador",
  },
  {
    id: 2,
    name: "André Celestino Martins",
    title: "Em definição",
    level: "Mestrado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2021,
    status: "Em andamento",
    role: "Coorientador",
  },
  // Tese de doutorado
  {
    id: 3,
    name: "Bernardo Alberto Marcussi",
    title: "Convective patterns in Hele-Shaw flows",
    level: "Doutorado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2022,
    status: "Em andamento",
    role: "Coorientador",
  },
  {
    id: 4,
    name: "Bruno Campos dos Santos",
    title: "Simulation of flow in porous media apllied to medical applications",
    level: "Doutorado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2022,
    status: "Em andamento",
    role: "Coorientador",
  },
  // Iniciação científica
  {
    id: 5,
    name: "Isabela Carvalho Benevides",
    title: "Reconstrução de Geometrias Tridimensionais a partir de Imagens Médicas para Estudo de Implantes Farmacológicos",
    level: "Iniciação Científica",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2025,
    status: "Em andamento",
    role: "Orientador",
  },
  // Orientações de outra natureza
  {
    id: 6,
    name: "Isabela Carvalho Benevides",
    title: "Precious Plastic UERJ",
    level: "Outra natureza",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2025,
    status: "Em andamento",
    role: "Orientador",
  },
];

export const completedProjects: Student[] = [
  // Dissertação de mestrado
  {
    id: 7,
    name: "Haroldo Rufino Rosman Junior",
    title: "Numerical Simulation of Transport Through Polymer Layer and Porous Arterial Wall of Sirolimus and Paclitaxel in Drug-eluting Stents",
    level: "Mestrado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2022,
    endYear: 2022,
    status: "Concluído",
    role: "Coorientador",
    funding: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ",
  },
  {
    id: 8,
    name: "Fabiane Aparecida dos Santos Frazzoli",
    title: "Anisotropic Transport Through Polymer Layer and Porous Arterial Wall with Binding in Drug-eluting Stents using the FEM",
    level: "Mestrado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2020,
    endYear: 2020,
    status: "Concluído",
    role: "Coorientador",
    funding: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior",
  },
  // Tese de doutorado
  {
    id: 9,
    name: "Waleska Gonçalves dos Santos",
    title: "Study on the Variable Viscosity and Diffusivity Steady-State Hydrodynamic and Concentration Fields Near a Rotating Hemispherical Electrode",
    level: "Doutorado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2024,
    endYear: 2024,
    status: "Concluído",
    role: "Coorientador",
    funding: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ",
  },
  // Pós-doutorado
  {
    id: 10,
    name: "Mariana Erthal Rocha",
    title: "Supervisão de Pós-doutorado",
    level: "Pós-doutorado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2025,
    endYear: 2025,
    status: "Concluído",
    role: "Supervisora",
    funding: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ",
  },
  {
    id: 11,
    name: "Hyun Ho Shin",
    title: "Supervisão de Pós-doutorado",
    level: "Pós-doutorado",
    institution: "Universidade do Estado do Rio de Janeiro",
    startYear: 2024,
    endYear: 2024,
    status: "Concluído",
    role: "Supervisora",
    funding: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do RJ",
  },
  // Iniciação científica
  {
    id: 12,
    name: "Juliana Calazans de Cerqueira",
    title: "Estocagem de Dióxido de Carbono em Aquíferos Salinos na Produção e Uso de Biocombustíveis",
    level: "Iniciação Científica",
    institution: "Universidade Federal do Rio de Janeiro",
    startYear: 2020,
    endYear: 2020,
    status: "Concluído",
    role: "Orientador",
    funding: "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
  },
  {
    id: 13,
    name: "Ramon Christian Moreira Gomes Mendes Juvenal",
    title: "Método de Elementos Finitos Aplicado ao Escoamento Disperso de Poluentes Resultantes da Produção de Biocombustíveis",
    level: "Iniciação Científica",
    institution: "Universidade Federal do Rio de Janeiro",
    startYear: 2020,
    endYear: 2020,
    status: "Concluído",
    role: "Orientador",
    funding: "Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
  },
];