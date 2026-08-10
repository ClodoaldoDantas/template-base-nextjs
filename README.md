# Template Base Next.js

Template moderno para projetos Next.js com ferramentas de desenvolvimento configuradas.

## 🚀 Stack

- **Next.js 16.2** - Framework React
- **React 19.2** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização

## 🛠️ Ferramentas

### Qualidade de Código
- **Biome** - Linter e formatter rápido
  - Regras recomendadas para React e Next.js
  - Auto-organização de imports
  - Formatação com single quotes e semicolons opcionais

### Testes
- **Vitest** - Framework de testes
- **Testing Library** - Testes de componentes React
- Cobertura de código com V8

### Git Hooks
- **Lefthook** - Gerenciador de Git hooks
- Hooks configurados:
  - `pre-commit` - Validação de código com Biome nos arquivos staged
  - `pre-push` - Testes antes do push

## 📦 Scripts

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Build de produção
pnpm start        # Inicia servidor de produção

# Qualidade
pnpm lint         # Verifica código com Biome
pnpm format       # Formata código

# Testes
pnpm test         # Executa testes
pnpm test:watch   # Testes em modo watch
pnpm test:ui      # Interface visual de testes
pnpm test:coverage # Relatório de cobertura
```

## 🎯 Recursos

- ✅ React Compiler habilitado
- ✅ Path aliases (`@/*` → `./src/*`)
- ✅ Strict mode TypeScript
- ✅ VCS integration (Git)
- ✅ Coverage automático

## 📂 Estrutura

```
src/
├── app/          # App Router do Next.js
└── components/   # Componentes reutilizáveis
```

## 🚦 Como Usar

```bash
# Instalar dependências
pnpm install

# Iniciar desenvolvimento
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)
