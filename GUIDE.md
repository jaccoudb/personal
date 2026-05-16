# Guia de Cadastro

## 1. Cadastrar uma nova rota

### 1.1 Criar o componente da página

Crie o arquivo do componente em `src/components/<secao>/` ou `src/pages/<secao>/`:

```tsx
// src/pages/mynew/MyNewPage.tsx
import { useTranslation } from 'react-i18next';

export default function MyNewPage() {
  const { t } = useTranslation('mynew');
  return <h1>{t('title')}</h1>;
}
```

### 1.2 Adicionar a rota

Edite `src/routes.tsx`: importe o componente e adicione um `<Route>`:

```tsx
import MyNewPage from './pages/mynew/MyNewPage';

export const routes = (
  <>
    <Route path="/" element={<Home />} />
    {/* ... demais rotas ... */}
    <Route path="/my-new-page" element={<MyNewPage />} />
  </>
);
```

### 1.3 Adicionar arquivos de tradução

Crie `src/i18n/locales/pt-BR/mynew.json`, `src/i18n/locales/en/mynew.json` e `src/i18n/locales/fr/mynew.json`:

```json
{
  "title": "Minha Nova Página"
}
```

### 1.4 Registrar o namespace no i18n

Edite `src/i18n/index.ts`:

```ts
import myNewPtBr from './locales/pt-BR/mynew.json';
import myNewEn from './locales/en/mynew.json';
import myNewFr from './locales/fr/mynew.json';
```

Adicione nos `resources` de cada idioma:

```ts
'pt-BR': { /* ... */ mynew: myNewPtBr },
en:      { /* ... */ mynew: myNewEn },
fr:      { /* ... */ mynew: myNewFr },
```

Adicione `'mynew'` ao array `ns`.

### 1.5 Atualizar a declaração de tipos

Edite `src/i18n/react-i18next.d.ts`:

```ts
import mynew from './locales/pt-BR/mynew.json';

// Em CustomTypeOptions.resources:
mynew: typeof mynew;
```

---

## 2. Cadastrar uma rota no navbar

### 2.1 Adicionar label de navegação

Edite `src/i18n/locales/pt-BR/common.json` (e nos outros idiomas):

```json
{
  "nav": {
    "home": "Home",
    "resume": "Currículo",
    "mynew": "Minha Nova Página",
    // ...
  }
}
```

### 2.2 Adicionar item ao menu

Edite `src/components/NavBar.tsx`, array `menuItems` (linha 81):

```tsx
const menuItems = [
  { label: t('nav.home'), path: '/', sectionId: 'home', disabled: false },
  // ...
  { label: t('nav.mynew'), path: '/my-new-page', disabled: false },
];
```

**Propriedades do item:**

| Propriedade | Descrição |
|---|---|
| `label` | Texto traduzido via `t('nav.<chave>')` |
| `path` | URL da rota (ex: `/my-new-page`) |
| `sectionId` | (opcional) ID da seção na Home para scroll suave |
| `disabled` | `true` desabilita o item e exibe "(Em breve)" |

---

## 3. Cadastrar materiais do curso

### 3.1 Organizar os arquivos

Coloque os PDFs (ou outros formatos) em `public/materials/<id-do-curso>/`:

```
public/materials/
├── index.json
├── calculo-numerico/
│   ├── aula-01.pdf
│   └── aula-02.pdf
└── meu-novo-curso/
    ├── aula-01.pdf
    └── lista-01.pdf
```

### 3.2 Atualizar o index.json

Edite `public/materials/index.json`:

```json
{
  "courses": [
    {
      "id": "meu-novo-curso",
      "title": {
        "pt-BR": "Meu Novo Curso",
        "en": "My New Course",
        "fr": "Mon Nouveau Cours"
      },
      "description": {
        "pt-BR": "Materiais do curso.",
        "en": "Course materials.",
        "fr": "Supports du cours."
      },
      "materials": [
        {
          "title": "Aula 01",
          "file": "meu-novo-curso/aula-01.pdf",
          "type": "pdf"
        },
        {
          "title": "Lista 01",
          "file": "meu-novo-curso/lista-01.pdf",
          "type": "pdf"
        }
      ]
    }
  ]
}
```

**Tipos de material suportados:** `pdf`, `zip`, `ppt`, `pptx`, `doc`, `docx`, `link` (definidos em `src/types/course-materials.ts`).

### 3.3 (Opcional) Vincular a um curso existente

Se o material pertence a um curso já cadastrado em `src/data/coursesData.ts`, edite o campo `materialsId` do curso para apontar para o `id` do JSON:

```ts
{
  id: 3,
  name: "Meu Novo Curso",
  slug: "meu-novo-curso",
  materialsRoute: "/courses/meu-novo-curso/materials",
  materialsId: "meu-novo-curso",
  // ...
}
```

Isso faz com que a página de cursos (`/courses`) exiba um botão "Material do Curso" que leva para `/courses/meu-novo-curso/materials`, filtrando os materiais pelo `materialsId`.

O slug é um identificador URL-friendly (sem acentos, espaços ou caracteres especiais) para cada curso. Ele é usado na rota /courses/:slug/materials — por exemplo, metodos-computacionais vira /courses/metodos-computacionais/materials. O CourseMaterialsPage pega o slug dos parâmetros da URL (useParams) e o usa para buscar o curso correspondente no array coursesData, tanto para exibir info do curso quanto para filtrar os materiais.

**Arquitetura do fluxo:**

```
coursesData.ts (slug + materialsId) -----> URL /courses/:slug/materials
                                                    |
                                                    v
public/materials/index.json (id) <---- CourseMaterialsPage busca pelo id
                                                    |
                                                    v
                                        public/materials/<id>/arquivo.pdf
```
