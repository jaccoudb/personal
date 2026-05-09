// src/data/coursesData.ts
export interface Course {
  id: number;
  code: string;
  name: string;
  level: CourseLevel[];
  period: string;
  schedule: string[];
  syllabus: string[];
  credits: number;
  workload: number;
  slug: string;
  classCode?: string; // Código da turma (opcional)
}

export type CourseLevel = "undergraduate" | "masters" | "doctorate";

export const getLevelColor = (level: CourseLevel) => {
  switch (level) {
    case "undergraduate":
      return { bg: "#e3f2fd", color: "#1976d2", border: "#1976d2" };
    case "masters":
      return { bg: "#e8f5e9", color: "#388e3c", border: "#388e3c" };
    case "doctorate":
      return { bg: "#f3e5f5", color: "#7b1fa2", border: "#7b1fa2" };
    default:
      return { bg: "#f5f5f5", color: "#616161", border: "#616161" };
  }
};

export const courses: Course[] = [
  {
    id: 1,
    code: "",
    name: "Métodos Computacionais",
    level: ["masters", "doctorate"],
    period: "2026.1",
    schedule: ["Terças-feiras, 12:30 - 14:20", "Quintas-feiras, 16:10 - 17:50"],
    classCode: "",
    syllabus: [
      "Sistemas numéricos e erros",
      "Métodos numéricos para solução de equações não lineares",
      "Interpolação e integração numéricas",
      "Matrizes e sistemas de equações lineares e não lineares",
      "Solução numérica de equações diferenciais ordinárias",
      "Solução numérica de equações diferenciais parciais parabólicas, elípticas e hiperbólicas",
      "Ferramentas de métodos computacionais",
    ],
    credits: 4,
    workload: 60,
    slug: "metodos-computacionais",
  },
  {
    id: 2,
    code: "FEN03-02040",
    name: "Fenômenos de Transporte",
    level: ["undergraduate"],
    period: "2026.1",
    schedule: [
      "Turma 4 - Quartas e Sextas-feiras (M3-M4)",
      "Turma 5 - Quartas e Sextas-feiras (M5-M6)",
      "Turma 6 - Terças-feiras (T5-T6) e Quartas-feiras (T3-T4)",
    ],
    classCode: "FEN03-02040",
    syllabus: [
      "Conceitos básicos",
      "Estática dos fluidos",
      "Descrição de um fluido em movimento",
      "Sistema e volume de controle",
      "Relações Integrais: conservação de massa, balanço de momentum linear e angular, conservação de energia, equações de Bernoulli",
      "Viscosidade",
      "Noções de camada limite",
      "Escoamento laminar",
      "Escoamento turbulento",
      "Escoamento turbulento em condutos forçados",
      "Fundamentos de transmissão de calor",
      "Mecanismos de transferência",
      "Condução: parâmetros, métodos exatos e aproximados, correlações",
      "Radiação: tipos, leis",
      "Equipamentos de troca de calor",
      "Fundamentos de transferência de massa: difusão molecular, coeficiente de difusão, convecção, equações",
    ],
    credits: 3,
    workload: 60,
    slug: "fenomenos-transporte",
  },
];
