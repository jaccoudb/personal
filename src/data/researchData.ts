// src/data/researchData.ts
export interface ResearchProject {
  id: number;
  title: string;
  period: string;
  status: "Em andamento" | "Concluído";
  description: string;
  students: {
    undergraduate?: number;
    masters?: number;
    doctorate?: number;
    professionalMasters?: number;
  };
  researchers: string[];
  coordinators: string[];
  funding: string[];
}

export const researchProjects: ResearchProject[] = [
  {
    id: 1,
    title:
      "E-13/2023 - Estudo numérico e experimental do sequestro de dióxido de carbono em formações geológicas",
    period: "2024 - Atual",
    status: "Em andamento",
    description:
      "FAPERJ N13/2023 - AUXÍLIO BÁSICO À PESQUISA (APQ1) 2023. Estudo numérico e experimental do sequestro de dióxido de carbono em formações geológicas.",
    students: { masters: 1, doctorate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "André Celestino Martins",
      "PONTES, JOSÉ",
      "Bernardo Alberto Marcussi",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 2,
    title:
      "Modelagem aerotermodinâmica, desenvolvimento de propelentes, aviônica e ferramentas experimentais para testes de projéteis de alcance estendido e foguetes",
    period: "2024 - Atual",
    status: "Em andamento",
    description:
      "Desenvolvimento de ferramentas computacionais para integrar a modelagem aerotermodinâmica com aviônica de projéteis e foguetes, bem como o desenvolvimento de propelentes sólidos, avaliando seu desempenho em função de sua formulação e envelhecimento em condições tropicais e amazônicas.",
    students: { masters: 7, doctorate: 2 },
    researchers: [
      "Rachel Manhães de Lucena",
      "José da Rocha Miranda Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Maurício Ferrapontoff Lemos",
      "GIL ROBERTO VIEIRA PINHEIRO",
      "Leib de Andrade Neubarth",
      "Priscila Simões Teixeira do Amaral",
      "SHIN, HYUN HO",
      "OLIVEIRA, GUSTAVO CHARLES PEIXOTO DE",
      "MANGIAVACCHI, NORBERTO",
      "Christian E. Schaerer",
      "Olexiy Shynkarenko",
      "Fernanda dos Santos da Luz",
      "Fernando Cunha Peixoto",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 3,
    title:
      "Desenvolvimento de agente de ligação para formulações de propelente do tipo compósito (AGLIG)",
    period: "2023 - Atual",
    status: "Em andamento",
    description:
      "Os agentes de ligação são moléculas usadas como aditivos em formulações de propelentes sólidos do tipo compósito, sendo responsáveis por promover melhoria das propriedades mecânicas, permitindo que estes propelentes alcancem os requisitos estruturais mínimos de projeto. Esses agentes de ligação são considerados estratégicos na produção de propelentes compósitos aplicados em lançadores espaciais de combustível sólido para o Programa Espacial Brasileiro (PEB). Da mesma forma, também podem ser aplicados em outros armamentos das Forças Armadas, como foguetes e mísseis. Entretanto, estes agentes de ligação possuem comércio controlado, assim, empresas da Base Industrial de Defesa (BID), podem estar expostas a possíveis mecanismos de cerceamento e embargos para aquisição deste produto estratégico. A ausência desse tipo de insumo pode inviabilizar a produção de propelentes compósitos para os armamentos supracitados. Desta forma, o domínio da síntese de aditivos estratégicos assim como de sua produção, proporciona sobremaneira o aumento da autonomia da BID. O IPqM sintetiza em escala laboratorial o agente de ligação baseado em poliaminas. Portanto, o presente projeto tem como objetivo desenvolver nacionalmente todo o ciclo de síntese de tais agentes de ligação em escala piloto e também desenvolver processos contínuos de produção deste insumo, baseado em reatores de fluxo contínuo, que se caracterizam como inovações tecnológicas e estratégicas para o PEB.",
    students: { undergraduate: 4, professionalMasters: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "Daniel José Nahid Mansur Chalhub",
      "Maurício Ferrapontoff Lemos",
      "PONTES, JOSÉ",
      "Fernanda dos Santos da Luz",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["IPqM"],
  },
  {
    id: 4,
    title:
      "E_40/2021-FAPERJ - Modelagem matemática e computacional de implantes médicos farmacológicos: estudo da hemodinâmica e eluição de fármacos em stents coronarianos",
    period: "2022 - Atual",
    status: "Em andamento",
    description:
      "As doenças cardiovasculares são uma das principais causas de morte no mundo, mais pessoas morrem anualmente por essas enfermidades que por qualquer outra. Sendo que 40 desses óbitos são devidos à doença arterial coronariana, causada por uma condição inflamatória crônica conhecida como aterosclerose, que resulta no estreitamento e enrijecimento das artérias do músculo cardíaco. A implantação de stents farmacológicos (SF) coronarianos é um tratamento muito aplicado à aterosclerose. O SF, que é um exemplo de implante médico farmacológico, possui um revestimento que libera o fármaco no tecido circundante induzindo efeitos de cura da doença. Apesar da eluição do fármaco na artéria coronariana, após a implantação de um SF podem ocorrer complicações, causando reestenose e trombose devido ao stent implantado. Portanto, entender o comportamento, a dosagem correta da concentração e a eluição do fármaco do revestimento na parede arterial e sua perda para o lúmen de um SF é muito importante para redução do risco de ocorrência destas complicações. Simulações numéricas a partir de modelos computacionais permitem avaliar e quantificar parâmetros da dinâmica deste fenômeno em vários cenários, bem como criar técnicas específicas e confiáveis de previsão de resultados de tratamentos. Neste projeto, pretende-se avançar no estado da arte da modelagem computacional aplicada a stents, reduzindo a taxa de mortalidade devida a reestenose e a trombose associadas à intervenção coronária percutânea, mediante a escolha otimizada dos stents de acordo com o perfil de cada paciente com a utilização da fluidodinâmica computacional (CFD). Pretende-se também inserir uma linha de pesquisa inédita na ICT UERJ: Modelagem computacional de implantes médicos farmacológicos no PPG-EM da UERJ, ampliando os estudos acerca de stents a outros implantes médicos farmacológicos.",
    students: { masters: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José da Rocha Miranda Pontes",
      "Haroldo Rosman Junior",
      "Mariana Erthal Rocha",
      "Hyun Ho Shin",
    ],
    coordinators: ["Rachel Manhães de Lucena"],
    funding: ["FAPERJ"],
  },
  {
    id: 5,
    title:
      "E_13/2021 - Modelagem e simulação computacional do comportamento de projéteis de armas de fogo para dimensionamento de câmaras balísticas",
    period: "2021 - Atual",
    status: "Em andamento",
    description:
      "Os exames de comparação balística realizados pela Secretaria de Polícia Civil do Rio de Janeiro (SEPOL) têm por objetivo a identificação da arma da qual um projétil foi disparado. Para isso é necessário a produção de um projétil padrão, que seja disparado e coletado em ambiente controlado, sem deformações, além de avaliar as impressões deixadas pelo raiamento do cano da arma ao estampar a superfície do projétil, de modo que possa haver posterior comparação com projétil, suspeito, sujeito a análise. O ambiente controlado consiste de uma câmara balística onde a energia do projétil é dissipada, atendendo aos requisitos acima. O projeto tem por objetivo o desenvolvimento de um simulador computacional que permita a otimização de câmaras balísticas para vários tipos de projéteis, e a construção de uma para uso com projéteis com características específicas, de modo a validar o simulador e que seja de produção nacional, compacta e de baixo custo. As simulações computacionais terão por objetivo a otimização de projeto e dos custos das câmaras, considerando a utilização de diferentes tipos de fluidos.",
    students: {},
    researchers: [
      "Rachel Manhães de Lucena",
      "Gustavo Rabello dos Anjos",
      "José da Rocha Miranda Pontes",
      "Gustavo Charles Peixoto Oliveira",
      "Rogério Martins da Saldanha Gama",
      "Norberto Mangiavacchi",
      "Daniel José Nahid Mansur Chalhub",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 6,
    title:
      "AÇÃO EMERGENCIAL COVID-19 - Simulação de escoamentos multifásicos aplicada ao desenvolvimento tecnológico e científico de sistemas de proteção individual e coletiva para combate aos efeitos da COVID-19",
    period: "2020 - Atual",
    status: "Em andamento",
    description:
      "Simulação de escoamentos multifásicos aplicada ao desenvolvimento tecnológico e científico de sistemas de proteção individual e coletiva para combate aos efeitos da COVID-19. Este projeto consiste no desenvolvimento de sistemas por meio de simulações computacionais de escoamentos multifásicos, com validação experimental, com o objetivo de se obter uma ferramenta robusta e eficiente que auxilie na prevenção e redução do contágio do vírus SARS-CoV-2. O projeto atuará tanto no âmbito da proteção individual, o que inclui a otimização de equipamentos de proteção individual (EPIs), quanto dos sistemas coletivos, em ambientes com aglomerações de pessoas. A metodologia de elementos finitos/volumes finitos e a metodologia de programação orientada a objeto serão utilizadas para o desenvolvimento dos modelos de escoamentos multifásicos. Em relação à proteção individual, a dispersão de gotículas provenientes de esternutação (espirro), tosse, fala, etc. será simulada computacionalmente de maneira que máscaras de proteção e outros EPIs possam ser otimizados. No caso de sistemas coletivos, simulações em escalas maiores são propostas, como o transporte de partículas em ambientes fechados - restaurantes, elevadores etc. - e também em ambientes abertos, como estações de transporte público. Para estes casos é proposto o desenvolvimento de um sistema de termografia, utilizando câmeras termográficas, para possibilitar a avaliação da temperatura corporal em massa, de ambientes com alto fluxo de pessoas, com o objetivo de alimentar as simulações computacionais. Esta iniciativa também tem o objetivo de desenvolver um sistema inteligente e robusto, utilizando técnicas de Inteligência Artificial e Machine Learning, para auxiliar no combate à COVID-19.",
    students: { doctorate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José da Rocha Miranda Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Mariana Erthal Rocha",
      "Sonia Maria Florenzino Nina",
      "Cristiane Marques Monteiro Pimenta",
      "Jorge da Silva Martins",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 7,
    title:
      "FINEP Convênio 01.19.0087.00 REF. 0666-18 Estações de Tratamento de Esgoto Compactas e Modulares Baseadas em Tecnologias Inovadoras e Integradas",
    period: "2019 - Atual",
    status: "Em andamento",
    description:
      "Neste projeto propõe-se o desenvolvimento de uma tecnologia que possibilite o tratamento do esgoto perto de sua origem, numa escala que minimize o custo econômico, social e ambiental para cada situação específica. Para este objetivo, o biogás obtido como resultado do tratamento de efluentes será utilizado, como uma fonte de energia para o operação da própria unidade, e o composto orgânico será estabilizado (NPK) e poderá ser utilizado em recuperação de áreas degradadas, forrações de praças, entre outros usos, sem geração de passivo ambiental e de vetores de contaminação.",
    students: { doctorate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José da Rocha Miranda Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Mariana Erthal Rocha",
      "Sonia Maria Florenzino Nina",
      "Gandhi Giordano",
      "Cristiane Marques Monteiro Pimenta",
      "Jorge da Silva Martins",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FINEP"],
  },
  {
    id: 8,
    title:
      "Desenvolvimento de ferramentas computacionais e testes para predizer comportamento de munições navais de alcance estendido",
    period: "2019 - Atual",
    status: "Em andamento",
    description:
      "Munições possuem alcance limitado pelo arraste aerodinâmico, sendo o principal arraste ocasionado pelo vácuo formado na base reta do projétil. A tecnologia Base Bleed promove um aumento do alcance pela melhoria aerodinâmica. Base Bleed é a tecnologia que envolve a geração de um fluxo de produtos de combustão de um propelente na parte traseira da munição, durante o voo supersônico do projétil, de modo a preencher parcialmente o vácuo de base. A diminuição do arraste promovida pelo Base Bleed pode resultar em um aumento de até 30% no alcance do projétil. No caso do presente projeto, a meta é promover o aumento no alcance do projétil da munição de calibre 114,3 mm, dos atuais 21 quilômetros (da munição convencional) para até 26,5 quilômetros (munição de alcance estendido), com a inserção de um sistema de propelente Base Bleed, desenvolvido pelo IPqM. O desenvolvimento de grãos propelentes para o Base Bleed ainda envolve uso excessivo de insumos, pois a única maneira atual de chegar as formulações adequadas é pela fabricação em escala laboratorial e piloto dos grãos. Não existem ferramentas computacionais disponíveis no país que permitam estabelecer uma relação entre a termodinâmica da queima de uma determinada formulação do propelente com os parâmetros aero e fluidodinâmicos que governam o efeito Base Bleed e seu desempenho balístico. Esse é um problema de cunho científico, pois, não há solução desenvolvida disponível no mercado e há necessidade de desenvolvê-la.",
    students: { undergraduate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Maurício Ferrapontoff Lemos",
      "Laurílio José da Silva Junior",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 9,
    title:
      "Desenvolvimento tecnológico e científico de sistemas de proteção individual e coletiva para a retomada do crescimento durante e após a pandemia de COVID-19 (Edital INOVA 2020 UERJ)",
    period: "2020 - 2023",
    status: "Concluído",
    description:
      "Visando atuar no combate contra a COVID-19, com foco na prevenção do contágio da população em geral e dos profissionais da saúde, de maneira segura e economicamente viável, de modo a reduzir o tempo para a retomada e manutenção do crescimento econômico, este se projeto propõe a realizar: - A transformação de garrafas PET, resíduos cujo descarte inadequado representa potenciais efeitos nocivos para o meio ambiente e para a saúde humana, em máscaras de proteção de alta qualidade, revestidas por material biocida e virucida, para a proteção contra o vírus SARS-CoV-2. - A implantação de sistemas térmicos de triagem nos terminais rodoviários da CODERTE, e em outros locais de grande circulação, no combate à COVID-19 no estado do Rio de Janeiro. - O desenvolvimento de plataformas de telepresença de baixo custo para realização de triagem de pacientes em instalações de saúde (acamados ou hospitalizados), reduzindo o risco de contágio dos profissionais da saúde. As múltiplas propostas desse projeto, implementações de caráter emergencial em função do combate ao COVID-19, poderiam ajudar também caso haja a eclosão de outras pandemias no futuro.",
    students: { undergraduate: 5, masters: 6, doctorate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Gustavo Rabello dos Anjos",
      "Norberto Mangiavacchi",
      "José da Rocha Miranda Pontes",
      "Gustavo Charles Peixoto Oliveira",
      "Daniel José Nahid Mansur Chalhub",
      "Renan de Souza Teixeira",
      "Haroldo Rosman Junior",
      "Mariana Erthal Rocha",
    ],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["UERJ"],
  },
  {
    id: 10,
    title: "Formação de Estruturas de Não Equilíbrio",
    period: "2017 - 2018",
    status: "Concluído",
    description:
      "Com este projeto, pretende-se buscar o apoio financeiro para manutenção de um técnico necessário ao desenvolvimento de projetos que envolvem a formação de nanoestruturas em superfícies por bombardeamento iônico e simulação numérica de estruturas de não equilíbrio em sistemas químicos e ambientais. A primeira linha de pesquisa tem como principal atividade a resolução numérica da equação amortecida e anisotrópica de Kuramoto-Sivashisnky, dando prosseguimento à dissertação de mestrado de Eduardo Vitral Freigedo Rodrigues (PPGEM/UERJ - 2015) e o desenvolvimento da tese de doutoramento de Jean Carlo Feital Frazzoli (início: 2015). Este trabalho é feito cooperação com o Prof. Daniel Walgraef (Universidade Livre de Bruxelas). A segunda linha de pesquisa tem aplicações no desenvolvimento de técnicas de sequestro de gases de efeito estufa por formações geológicas subterrâneas, como aquíferos salinos ou pelo gelo dos oceanos. Este projeto está sendo realizado em colaboração com o Departamento de Físico-Química e Biologia Teórica da Universidade Livre de Bruxelas, dirigido pelas professoras Anne De Wit e Geneviève Dupont. Desta forma, o apoio financeiro da FAPERJ, através da concessão da bolsa INT 4 - 40 hs, é importante para que se cumpram os escopos propostos nos projetos em desenvolvimento. Manter o profissional durante todo este período no laboratório, torna-se necessário devido ao escopo multiusuário das atividades a serem desenvolvidas pela bolsista, que além de atender a estes projetos de Pós-Graduação, também será responsável pela condução de experimentos junto aos alunos da graduação.",
    students: {},
    researchers: ["Rachel Manhães de Lucena", "José da Rocha Miranda Pontes"],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FAPERJ"],
  },
  {
    id: 11,
    title: "Programa Institucional de Bolsa de Iniciação à Docência - PIBID",
    period: "2009 - 2010",
    status: "Concluído",
    description:
      "O PIBID é um projeto Nacional de estímulo à Docência atuando nas áreas mais carentes da Educação Básica, ai inclui-se a Matemática. Uma equipe de 10 bolsistas coordenada pelo Prof. Benaia Sobreira de Jesus Lima atua dentro da escola na esfera pedagógica, administrativa participando de forma ativa do processo ensino aprendizagem, propondo e implementando novas estratégias para a melhoria qualitativa do aprendizado.",
    students: { undergraduate: 10 },
    researchers: ["Rachel Manhães de Lucena", "Benaia Sobreira de Jesus Lima"],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["CAPES"],
  },
  {
    id: 12,
    title:
      "Bairro Escola: inovação na estruturação da rede de proteção local em Nova Iguaçu",
    period: "2008 - 2010",
    status: "Concluído",
    description:
      "Esse projeto teve por objetivo analisar os impactos de uma política pública local denominada, Bairro Escola, implementada pela Prefeitura de Nova Iguaçu a partir de 2006. A pesquisa adotou distintas metodologias (screening e análise de impacto; grupos focais; entrevistas) para apreender junto aos mais distintos atores (professores da rede pública, famílias de alunos, parceiros) as mudanças promovidas pela tentativa de implementar o contra-turno. Levou à elaboração de 5 relatórios de Pesquisa e dará lugar à publicação de um livro.",
    students: {},
    researchers: ["Rachel Manhães de Lucena", "Maria Helena Lavinas de Morais"],
    coordinators: ["Norberto Mangiavacchi"],
    funding: ["FINEP"],
  },
  {
    id: 13,
    title:
      "Desenvolvimento de ferramentas computacionais e testes para predizer comportamento de munições navais de alcance estendido",
    period: "2019 - Atual",
    status: "Em andamento",
    description:
      "Munições possuem alcance limitado pelo arraste aerodinâmico, sendo o principal arraste ocasionado pelo vácuo formado na base reta do projétil. A tecnologia Base Bleed promove um aumento do alcance pela melhoria aerodinâmica. Base Bleed é a tecnologia que envolve a geração de um fluxo de produtos de combustão de um propelente na parte traseira da munição, durante o voo supersônico do projétil, de modo a preencher parcialmente o vácuo de base. A diminuição do arraste promovida pelo Base Bleed pode resultar em um aumento de até 30% no alcance do projétil. No caso do presente projeto, a meta é promover o aumento no alcance do projétil da munição de calibre 114,3 mm, dos atuais 21 quilômetros (da munição convencional) para até 26,5 quilômetros (munição de alcance estendido), com a inserção de um sistema de propelente Base Bleed, desenvolvido pelo IPqM. O desenvolvimento de grãos propelentes para o Base Bleed ainda envolve uso excessivo de insumos, pois a única maneira atual de chegar as formulações adequadas é pela fabricação em escala laboratorial e piloto dos grãos. Não existem ferramentas computacionais disponíveis no país que permitam estabelecer uma relação entre a termodinâmica da queima de uma determinada formulação do propelente com os parâmetros aero e fluidodinâmicos que governam o efeito Base Bleed e seu desempenho balístico. Esse é um problema de cunho científico, pois, não há solução desenvolvida disponível no mercado e há necessidade de desenvolvê-la.",
    students: { undergraduate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Maurício Ferrapontoff Lemos",
      "Laurílio José da Silva Junior",
    ],
    coordinators: ["Laurílio José da Silva Junior"],
    funding: ["FAPERJ"],
  },
  {
    id: 14,
    title:
      "Desenvolvimento de ferramentas computacionais e testes para predizer comportamento de munições navais de alcance estendido",
    period: "2019 - Atual",
    status: "Em andamento",
    description:
      "Munições possuem alcance limitado pelo arraste aerodinâmico, sendo o principal arraste ocasionado pelo vácuo formado na base reta do projétil. A tecnologia Base Bleed promove um aumento do alcance pela melhoria aerodinâmica. Base Bleed é a tecnologia que envolve a geração de um fluxo de produtos de combustão de um propelente na parte traseira da munição, durante o voo supersônico do projétil, de modo a preencher parcialmente o vácuo de base. A diminuição do arraste promovida pelo Base Bleed pode resultar em um aumento de até 30% no alcance do projétil. No caso do presente projeto, a meta é promover o aumento no alcance do projétil da munição de calibre 114,3 mm, dos atuais 21 quilômetros (da munição convencional) para até 26,5 quilômetros (munição de alcance estendido), com a inserção de um sistema de propelente Base Bleed, desenvolvido pelo IPqM. O desenvolvimento de grãos propelentes para o Base Bleed ainda envolve uso excessivo de insumos, pois a única maneira atual de chegar as formulações adequadas é pela fabricação em escala laboratorial e piloto dos grãos. Não existem ferramentas computacionais disponíveis no país que permitam estabelecer uma relação entre a termodinâmica da queima de uma determinada formulação do propelente com os parâmetros aero e fluidodinâmicos que governam o efeito Base Bleed e seu desempenho balístico. Esse é um problema de cunho científico, pois, não há solução desenvolvida disponível no mercado e há necessidade de desenvolvê-la.",
    students: { undergraduate: 1 },
    researchers: [
      "Rachel Manhães de Lucena",
      "Norberto Mangiavacchi",
      "José Pontes",
      "Daniel José Nahid Mansur Chalhub",
      "Maurício Ferrapontoff Lemos",
      "Laurílio José da Silva Junior",
    ],
    coordinators: ["Laurílio José da Silva Junior"],
    funding: ["FAPERJ"],
  },
];
