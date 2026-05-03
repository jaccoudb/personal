// src/data/publicationsData.ts
export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  volume?: string;
  pages?: string;
  year: number;
  type: "journal" | "conference" | "extended-abstract" | "abstract";
}

export const getTypeColor = (type: string) => {
  switch (type) {
    case "journal":
      return { bg: "#e3f2fd", color: "#1976d2", label: "Periódico" };
    case "conference":
      return { bg: "#e8f5e9", color: "#388e3c", label: "Conferência" };
    case "extended-abstract":
      return { bg: "#fff3e0", color: "#f57c00", label: "Resumo Expandido" };
    case "abstract":
      return { bg: "#f3e5f5", color: "#7b1fa2", label: "Resumo" };
    default:
      return { bg: "#f5f5f5", color: "#616161", label: "Outro" };
  }
};

export const filterOptions = [
  { value: "all", label: "Todos" },
  { value: "journal", label: "Periódicos" },
  { value: "conference", label: "Congressos" },
  { value: "extended-abstract", label: "Resumos Expandidos" },
  { value: "abstract", label: "Resumos" },
];

export const publications: Publication[] = [
  // Artigos completos publicados em periódicos (2026)
  {
    id: 1,
    title:
      "Effectiveness of face shields in preventing the spread of airborne diseases through coughing: a CFD simulation study",
    authors: [
      "DOS SANTOS, AIRAM S",
      "NAHID MANSUR CHALHUB, DANIEL JOSÉ",
      "NEUBARTH, LEIB DE A",
      "MANGIAVACCHI, NORBERTO",
      "LUCENA, RACHEL M",
      "KNUPP, DIEGO C",
    ],
    journal: "Annals of Work Exposures and Health",
    volume: "70",
    pages: "p. wxag005",
    year: 2026,
    type: "journal",
  },
  // 2025
  {
    id: 2,
    title:
      "Effect of variable viscosity and diffusivity as well as Schmidt number on the steady-state hydrodynamic and concentration fields near a rotating hemispherical electrode",
    authors: [
      "LUCENA, R.M.",
      "SANTOS, W.G.",
      "Pontes, J.",
      "CHALHUB, D.J.N.M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "ELECTROCHIMICA ACTA",
    volume: "512",
    pages: "145356",
    year: 2025,
    type: "journal",
  },
  {
    id: 3,
    title: "Effect of an interface undulation on convective dissolution of CO2",
    authors: [
      "LUCENA, R.M.",
      "Pontes, J.",
      "BRAU, F.",
      "De Wit, A.",
      "MANGIAVACCHI, N.",
    ],
    journal: "ADVANCES IN WATER RESOURCES",
    volume: "197",
    pages: "104904",
    year: 2025,
    type: "journal",
  },
  // 2023
  {
    id: 4,
    title:
      "On the steady-state concentration and hydrodynamic fields close to a rotating hemispherical electrode with concentration dependent viscosity and diffusivity",
    authors: ["LUCENA, R.M.", "Pontes, J.", "ANJOS, G.R.", "MANGIAVACCHI, N."],
    journal: "ELECTROCHIMICA ACTA",
    volume: "450",
    pages: "142236",
    year: 2023,
    type: "journal",
  },
  // 2022
  {
    id: 5,
    title:
      "Linear stability analysis and nonlinear simulations of convective dissolution in an inclined porous layer between impermeable surfaces",
    authors: [
      "LUCENA, R. M.",
      "Pontes, J.",
      "De Wit, A.",
      "ANJOS, G. R.",
      "MANGIAVACCHI, N.",
    ],
    journal: "CHAOS",
    volume: "32",
    pages: "113110",
    year: 2022,
    type: "journal",
  },
  // 2018
  {
    id: 6,
    title:
      "On the transport through polymer layer and porous arterial wall in drug-eluting stents",
    authors: [
      "LUCENA, R. M.",
      "Mangiavacchi, N.",
      "Pontes, J.",
      "ANJOS, G. R.",
      "MCGINTY, S.",
    ],
    journal:
      "Journal of the Brazilian Society of Mechanical Sciences and Engineering",
    volume: "40",
    pages: "572",
    year: 2018,
    type: "journal",
  },
  // Trabalhos completos em anais de congressos (2025)
  {
    id: 7,
    title:
      "Estimation of aerodynamic parameters for supersonic rockets and ammunition",
    authors: [
      "FURTADO NUNES ROCHA DA SILVA, GABRIEL",
      "DA ROCHA MIRANDA PONTES, JOSÉ",
      "MANHÃES DE LUCENA, RACHEL",
      "CHALHUB, DANIEL",
      "PINHEIRO, GIL ROBERTO VIEIRA",
      "FERRAPONTOFF LEMOS, MAURÍCIO",
      "MANGIAVACCHI, NORBERTO",
    ],
    journal: "28th International Congress of Mechanical Engineering",
    year: 2025,
    type: "conference",
  },
  {
    id: 8,
    title:
      "COMPUTATIONAL MODELING OF ATHEROMA PLAQUE IN CORONARY ARTERIES: A CFD-BASED SYSTEMATIC REVIEW ON STENTS AND MATHEMATICAL APPROACHES",
    authors: [
      "ERTHAL ROCHA, MARIANA",
      "SHIN, HYUN HO",
      "MANHÃES DE LUCENA, RACHEL",
      "DA ROCHA MIRANDA PONTES, JOSÉ",
      "MANGIAVACCHI, NORBERTO",
    ],
    journal: "28th International Congress of Mechanical Engineering",
    year: 2025,
    type: "conference",
  },
  {
    id: 9,
    title:
      "RPC Aging Analysis: Computational Models and Perspectives for Extending Detector Lifespan",
    authors: [
      "MOTA, ISIS",
      "NEUBARTH, LEIB",
      "CHALHUB, DANIEL",
      "MANHÃES DE LUCENA, RACHEL",
      "MANGIAVACCHI, NORBERTO",
      "MELO DA COSTA, ELIZA",
      "THIEL, MAURICIO",
      "SANTORO, ALBERTO",
    ],
    journal: "28th International Congress of Mechanical Engineering",
    year: 2025,
    type: "conference",
  },
  {
    id: 10,
    title:
      "Two-Dimensional Hydrodynamic Simulation of Particle Stratification in UASB Reactors Using the k-epsilon Turbulence Model",
    authors: [
      "ARES MONTEIRO, YGOR",
      "MANHÃES DE LUCENA, RACHEL",
      "MANGIAVACCHI, NORBERTO",
      "SHIN, HYUN HO",
      "PORTELA, LUIS MANUEL",
    ],
    journal: "28th International Congress of Mechanical Engineering",
    year: 2025,
    type: "conference",
  },
  {
    id: 11,
    title:
      "AN ALE-FEM CODE FOR CO2 CONVECTIVE DISSOLUTION IN SALINE AQUIFERS WITH AN EVOLVING INTERFACE",
    authors: ["MARTINS, A. C.", "LUCENA, R. M.", "MANGIAVACCHI, N."],
    journal: "XXVIII Encontro Nacional de Modelagem Computacional",
    year: 2025,
    type: "conference",
  },
  // 2024
  {
    id: 12,
    title:
      "NAVIER-STOKES/DARCY COUPLING IN CORONARY ARTERY USING GRIDAP LIBRARY",
    authors: [
      "LUCENA, RACHEL MANHÃES DE",
      "SHIN, HYUN HO",
      "PONTES, JOSÉ",
      "MANGIAVACCHI, NORBERTO",
    ],
    journal: "XXVI Encontro Nacional de Modelagem Computacional",
    year: 2024,
    type: "conference",
  },
  {
    id: 13,
    title:
      "Numerical study of the flow in the coronary arterial wall and lumen after drug-eluting stent implantation",
    authors: [
      "SHIN, H. H.",
      "LUCENA, R. M.",
      "PONTES, JOSÉ",
      "MANGIAVACCHI, N.",
    ],
    journal: "VIII Encontro Nacional de Engenharia Biomecânica",
    year: 2024,
    type: "conference",
  },
  {
    id: 14,
    title:
      "Investigating Arterial Wall Deformation and Material Transport Properties Responses in Stent Implantation",
    authors: [
      "LUCENA, R. M.",
      "SHIN, H. H.",
      "PONTES, JOSÉ",
      "MANGIAVACCHI, N.",
    ],
    journal: "VIII Encontro Nacional de Engenharia Biomecânica",
    year: 2024,
    type: "conference",
  },
  {
    id: 15,
    title:
      "Estado da Arte: Fluidodinâmica Computacional (CFD) Aplicada a Stents Coronarianos",
    authors: [
      "SANTOS, B. C.",
      "LUCENA, R. M.",
      "SHIN, H. H.",
      "MANGIAVACCHI, N.",
    ],
    journal: "VIII Encontro Nacional de Engenharia Biomecânica",
    year: 2024,
    type: "conference",
  },
  {
    id: 16,
    title:
      "Investigating RPC Aging: Computational Models and Insights for Enhanced Detector Longevity",
    authors: [
      "MOTA, I. P.",
      "COSTA, E. M.",
      "THIEL, M.",
      "SANTORO, A. F. S.",
      "NEUBARTH, L. A.",
      "CHALHUB, D. J. N. M.",
      "LUCENA, R.M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "20th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2024,
    type: "conference",
  },
  {
    id: 17,
    title:
      "Estimation of Parameters for Propellant Grain Regression Models using Bayesian Inference: Application to Base Bleed Systems",
    authors: [
      "MACHADO, H. A.",
      "NEUBARTH, L. A.",
      "CHALHUB, D. J. N. M.",
      "LUCENA, R.M.",
      "LEMOS, M. F.",
      "PONTES, JOSÉ",
      "MANGIAVACCHI, NORBERTO",
    ],
    journal: "20th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2024,
    type: "conference",
  },
  {
    id: 18,
    title: "Supersonic aerodynamics of projectiles with base bleed propellants",
    authors: [
      "CONCEICAO, A. R.",
      "Pontes, J.",
      "NEUBARTH, L. A.",
      "LEMOS, M. F.",
      "CHALHUB, D. J. N. M.",
      "LUCENA, R.M.",
      "PINHEIRO, G. R. V.",
      "MANGIAVACCHI, N.",
    ],
    journal: "20th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2024,
    type: "conference",
  },
  {
    id: 19,
    title: "Hydrodynamic and thermal fem model of blast furnace cooling system",
    authors: [
      "VIEIRA JUNIOR, E.",
      "LUCENA, R.M.",
      "Pontes, J.",
      "MANGIAVACCHI, N.",
    ],
    journal: "20th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2024,
    type: "conference",
  },
  {
    id: 20,
    title:
      "FEM model for stratified turbulent flows for bio-reactor applications",
    authors: [
      "ARES, Y.",
      "MANGIAVACCHI, N.",
      "LUCENA, R.M.",
      "SHIN, H. H.",
      "PORTELA, L. M.",
    ],
    journal: "20th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2024,
    type: "conference",
  },
  // 2023
  {
    id: 21,
    title:
      "SIMULATION OF SURFACE TEMPERATURE DISTRIBUTION ON A BODY SUBJECTED TO EXTERNAL AIR FLOW",
    authors: [
      "NEUBARTH, L. A.",
      "MANGIAVACCHI, N.",
      "PONTES, JOSÉ",
      "LUCENA, R. M.",
      "SHIN, HYUN HO",
      "MARTINS, A. C.",
    ],
    journal: "XXVI Encontro Nacional de Modelagem Computacional",
    year: 2023,
    type: "conference",
  },
  {
    id: 22,
    title:
      "Numerical simulation of drug transport from Drug-Eluting stents through the arterial wall with an atheroma plaque",
    authors: [
      "ROSMAN JUNIOR, H.",
      "SHIN, HYUN HO",
      "LUCENA, R. M.",
      "PONTES, JOSÉ",
      "MANGIAVACCHI, N.",
      "MCGINTY, SEAN",
    ],
    journal: "27th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2023,
    type: "conference",
  },
  {
    id: 23,
    title:
      "CONVECTIVE PATTERNS IN HELE-SHAW FLOWS DRIVEN BY DENSITY GRADIENTS AND CHEMICAL COMPOSITION CHANGES",
    authors: [
      "MARCUSSI, B. A.",
      "MARTINS, A. C.",
      "LUCENA, R.M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "27th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2023,
    type: "conference",
  },
  // 2022
  {
    id: 24,
    title:
      "COMPUTER SIMULATION OF PRESSURE AND VELOCITY FIELDS IN DRUG-ELUTING STENTS USING THE GRIDAP LIBRARY",
    authors: [
      "LUCENA, RACHEL MANHÃES DE",
      "SHIN, HYUN HO",
      "OLIVEIRA, GUSTAVO CHARLES PEIXOTO DE",
      "ANJOS, GUSTAVO R.",
      "PONTES, JOSÉ",
      "MCGINTY, SEAN",
      "MANGIAVACCHI, NORBERTO",
    ],
    journal: "Encontro Nacional de Modelagem Computacional",
    year: 2022,
    type: "conference",
  },
  {
    id: 25,
    title:
      "FINITE ELEMENT ESTIMATION OF TEMPERATURE DISTRIBUTION ON THE HEAD SKIN SURFACE",
    authors: [
      "NEUBARTH, L. A.",
      "LUCENA, R. M.",
      "CHALHUB, D. J. N. M.",
      "ARES, Y.",
      "MANGIAVACCHI, N.",
    ],
    journal: "XXV Encontro Nacional de Modelagem Computacional",
    year: 2022,
    type: "conference",
  },
  {
    id: 26,
    title:
      "VERIFICATION OF ALE-FEM FOR CONVECTIVE DISSOLUTION OF CO2 IN SALINE AQUIFERS WITH A MOVABLE INTERFACE",
    authors: [
      "MARTINS, A. C.",
      "LUCENA, R. M.",
      "PONTES, J. R. M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "XXV Encontro Nacional de Modelagem Computacional",
    year: 2022,
    type: "conference",
  },
  {
    id: 27,
    title: "TEST BENCH FOR MEASURING THE REGRESSION RATE OF SOLID PROPELLANTS",
    authors: [
      "PINHEIRO, G. R. V.",
      "CANDIDO, M.",
      "CHALHUB, D. J. N. M.",
      "PONTES, J. R. M.",
      "NEUBARTH, L. A.",
      "MANGIAVACCHI, N.",
      "LUCENA, R. M.",
      "LEMOS, M. F.",
      "SILVA, A. P.",
      "AMARAL, P. S. T.",
      "SILVA JUNIOR, L.",
    ],
    journal: "19th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2022,
    type: "conference",
  },
  {
    id: 28,
    title:
      "Evaluating the effect of grain geometry and the particle size of ammonium perchlorate on the combustion of Base Bleed propellants in static firing tests",
    authors: [
      "LEMOS, M. F.",
      "SILVA JUNIOR, L.",
      "PINHEIRO, G. R. V.",
      "MANGIAVACCHI, N.",
      "CHALHUB, D. J. N. M.",
      "NEUBARTH, L. A.",
      "LUCENA, R. M.",
      "AMARAL, P. S. T.",
      "SILVA, A. P.",
      "PINTO, R. C.",
      "FERREIRA, W. K. O.",
    ],
    journal: "19th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2022,
    type: "conference",
  },
  {
    id: 29,
    title: "MATHEMATICAL MODEL FOR PROPELLANT GRAIN GEOMETRY REGRESSION",
    authors: [
      "NEUBARTH, L. A.",
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "CHALHUB, D. J. N. M.",
      "PINHEIRO, G. R. V.",
      "PONTES, J. R. M.",
      "LEMOS, M. F.",
      "SILVA JUNIOR, L.",
    ],
    journal: "19th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2022,
    type: "conference",
  },
  {
    id: 30,
    title: "Numerical Simulation of Projectile Impact on Newtonian Fluid Pool",
    authors: [
      "PINTO, V. P.",
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "SERRA, R. A.",
    ],
    journal: "19th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2022,
    type: "conference",
  },
  {
    id: 31,
    title:
      "FROM BENCH TO SHOOTING RANGE: CORRELATING BASE BLEED CHEMISTRY WITH THE BALLISTIC PERFORMANCE OF EXTENDED RANGE MUNITION",
    authors: [
      "LEMOS, M. F.",
      "SILVA, A. P.",
      "AMARAL, P. S. T.",
      "SOUZA, E. S.",
      "SILVA JUNIOR, L. J.",
      "PINTO, R. C.",
      "FERREIRA, W. K. O.",
      "CHALHUB, D. J. N. M.",
      "PINHEIRO, G. R. V.",
      "NEUBARTH, L. A.",
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "32nd International Symposium on Ballistics",
    year: 2022,
    type: "conference",
  },
  // 2021
  {
    id: 32,
    title:
      "NUMERICAL SIMULATION OF TRANSPORT THROUGH POLYMER LAYER AND POROUS ARTERIALWALL OF SIROLIMUS AND PACLITAXEL IN DRUG-ELUTING STENTS",
    authors: [
      "ROSMAN JUNIOR, H.",
      "LUCENA, R. M.",
      "Mangiavacchi, N.",
      "PONTES, J. R. M.",
      "MCGINTY, S.",
    ],
    journal: "26th International Congress of Mechanical Engineering",
    year: 2021,
    type: "conference",
  },
  // 2020
  {
    id: 33,
    title:
      "Numerical Aerodynamic Simulation of an Artillery Projectile with a Base Bleed System",
    authors: [
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
      "CHALHUB, D. J. N. M.",
      "PINHEIRO, G. R. V.",
      "SILVA, W. R. R.",
      "NEUBARTH, L. A.",
      "LEMOS, M. F.",
      "SILVA JUNIOR, L.",
    ],
    journal: "18th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2020,
    type: "conference",
  },
  {
    id: 34,
    title: "SIMULATION AND STATIC TESTS OF BASE BLEED GAS GENERATORS",
    authors: [
      "PINHEIRO, G. R. V.",
      "LUCENA, R. M.",
      "Mangiavacchi, N.",
      "PONTES, J. R. M.",
      "CHALHUB, D. J. N. M.",
      "SILVA, W. R. R.",
      "NEUBARTH, L. A.",
      "LEMOS, M. F.",
      "SILVA JUNIOR, L.",
    ],
    journal: "18th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2020,
    type: "conference",
  },
  {
    id: 35,
    title:
      "NUMERICAL SOLUTIONS FOR A BALLISTIC TRAJECTORY WITH DRAG REDUCTION PROVIDED BY A BASE BLEED UNIT",
    authors: [
      "SILVA, W. R. R.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
      "CHALHUB, D. J. N. M.",
      "PINHEIRO, G. R. V.",
      "LUCENA, R. M.",
      "NEUBARTH, L. A.",
      "LEMOS, M. F.",
      "SILVA JUNIOR, L.",
    ],
    journal: "18th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2020,
    type: "conference",
  },
  {
    id: 36,
    title:
      "IMPROVED ANISOTROPIC TRANSPORT THROUGH POLYMER LAYER AND POROUS ARTERIAL WALL WITH BINDING IN DRUG-ELUTING STENTS",
    authors: [
      "FRAZZOLI, F.",
      "ROSMAN JUNIOR, H.",
      "LUCENA, R.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
      "ANJOS, G. R.",
      "MCGINTY, S.",
    ],
    journal: "18th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2020,
    type: "conference",
  },
  // 2019
  {
    id: 37,
    title: "Moving Mesh Method for Two-Phase Flows with Dynamic Boundaries",
    authors: [
      "ANJOS, G. R.",
      "Mangiavacchi, N.",
      "Pontes, J.",
      "LUCENA, R. M.",
      "OLIVEIRA, G. C. P.",
    ],
    journal: "10th International Conference on Multiphase Flow",
    year: 2019,
    type: "conference",
  },
  // 2018
  {
    id: 38,
    title:
      "ANISOTROPIC TRANSPORT THROUGH POLYMER LAYER AND POROUS ARTERIAL WALL WITH BINDING IN DRUG-ELUTING STENTS USING THE FEM",
    authors: [
      "FRAZZOLI, F.",
      "LUCENA, R. M.",
      "Mangiavacchi, N.",
      "PONTES, J. R. M.",
      "ANJOS, G. R.",
      "MCGINTY, S.",
    ],
    journal: "17th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2018,
    type: "conference",
  },
  // 2017
  {
    id: 39,
    title:
      "Transport through polymer layer and porous arterial wall with binding in drugeluting stents using the FEM",
    authors: [
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
      "ANJOS, G. R.",
      "MCGINTY, S.",
    ],
    journal: "24th ABCM International Congress of Mechanical Engineering",
    year: 2017,
    type: "conference",
  },
  {
    id: 40,
    title: "Dynamics of Blood Flow in Coronary Artery",
    authors: [
      "ANJOS, G. R.",
      "MCGINTY, S.",
      "LUCENA, R. M.",
      "PONTES, J. R. M.",
      "MANGIAVACCHI, N.",
    ],
    journal: "24th ABCM International Congress of Mechanical Engineering",
    year: 2017,
    type: "conference",
  },
  // 2014 - Resumos expandidos
  {
    id: 41,
    title:
      "A Survey of Results Concerning Steady Solutions and the Stability of a Class of Rotating Flows",
    authors: [
      "PONTES, J. R. M.",
      "MANGIAVACCHI, N.",
      "ANJOS, G. R.",
      "GAONA, C. D. M.",
      "LUCENA, R. M.",
      "OLIVEIRA, G. C. P.",
      "FERREIRA, D. V. A.",
    ],
    journal: "3rd Conference of Computational Interdisciplinary Sciences",
    year: 2014,
    type: "extended-abstract",
  },
  {
    id: 42,
    title:
      "Finite Element Simulation of Fingering in Convective Dissolution in Porous Media",
    authors: [
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
      "De Wit, A.",
      "ANJOS, G. R.",
    ],
    journal: "3rd Conference of Computational Interdisciplinary Sciences",
    year: 2014,
    type: "extended-abstract",
  },
  // 2013
  {
    id: 43,
    title:
      "FEM (FINITE ELEMENT METHOD) SIMULATION OF THE THREE-DIMENSIONAL BOUNDARY LAYER CLOSE TO A ROTATING SEMI-SPHERICAL ELECTRODE IN ELECTROCHEMICAL CELLS",
    authors: [
      "LUCENA, R. M.",
      "MANGIAVACCHI, N.",
      "ANJOS, G. R.",
      "PONTES, J. R. M.",
    ],
    journal: "22nd International Congress of Mechanical Engineering",
    year: 2013,
    type: "conference",
  },
  // 2012
  {
    id: 44,
    title:
      "Hydrodynamics of eletrochemical cells with a rotating semi-spherical electrode",
    authors: [
      "LUCENA, R. M.",
      "ANJOS, G. R.",
      "MANGIAVACCHI, N.",
      "PONTES, J. R. M.",
    ],
    journal: "14th Brazilian Congress of Thermal Sciences and Engineering",
    year: 2012,
    type: "conference",
  },
  // 2021 - Resumo
  {
    id: 45,
    title:
      "MODELS OF EVOLUTION BASED ON DATA FOR SPATIO-TEMPORAL ANALYSIS OF COVID-19 IN BRAZILIAN STATES",
    authors: ["LUCENA, R.", "CUNHA JR, A."],
    journal:
      "42nd Ibero-Latin-American Congress on Computational Methods in Engineering",
    year: 2021,
    type: "abstract",
  },
];
