# PADRÃO DE DESENVOLVIMENTO FRONTEND

Estas regras são obrigatórias durante todo o desenvolvimento do projeto. Antes de criar ou modificar qualquer código, siga esta arquitetura e priorize reutilização, composição e simplicidade.

## 1. ORGANIZAÇÃO DE COMPONENTES

A estrutura deve separar claramente componentes reutilizáveis de seções específicas da página.

```text
src/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Badge/
│   ├── SectionTitle/
│   ├── Container/
│   ├── Input/
│   └── ...
│
├── sections/
│   ├── Hero/
│   ├── About/
│   ├── Services/
│   ├── Products/
│   ├── Testimonials/
│   ├── FAQ/
│   └── Contact/
│
├── pages/
├── hooks/
├── lib/
├── data/
├── assets/
└── ...
```

### `components/`
A pasta `components` deve conter **somente componentes reutilizáveis**.
Um componente deve existir em `components` quando puder ser utilizado em diferentes partes da aplicação sem depender de uma seção específica.

### `sections/`
A pasta `sections` contém as **seções específicas das páginas**. A seção é responsável pela composição e pelo layout específico daquela parte da página.

---

## 2. COMPOSIÇÃO E RESPONSABILIDADE ÚNICA
- É proibido criar componentes monolíticos quando puderem ser divididos em componentes menores.
- Isole elementos visuais repetidos ou com responsabilidade própria em componentes.
- A seção apenas orquestra e compõe os componentes menores.

---

## 3. REUTILIZAÇÃO E COMPONENTES EXISTENTES
- Antes de criar um novo componente, verifique se já existe algo semelhante em `components/`.
- Prefira estender com props/variants antes de criar variações duplicadas.
- Evite abstrações prematuras ou desnecessárias (`BaseCard`, `UniversalCard`, etc.).

---

## 4. DADOS FORA DO JSX
- Isole listas estáticas e conteúdos extensos em constantes ou arquivos em `src/data/`.
- Mapeie dados estruturados para componentes em vez de duplicar JSX estático.

---

## 5. HIERARQUIA DE CAMADAS
```text
Page
 ↓
Sections
 ↓
Reusable Components
 ↓
Primitive UI Elements
```
