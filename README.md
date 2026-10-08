# Python na Prática

Uma plataforma interativa para estudar fundamentos de Python executando código **realmente no navegador**, sem instalar Python e sem enviar o código para um servidor.

## O que existe na plataforma

- Dashboard com progresso, exercícios concluídos e trilha de fundamentos.
- 25 exercícios baseados no material original do curso.
- Busca por título, categoria, dificuldade e conceitos.
- Editor Python com CodeMirror, numeração de linhas, destaque de sintaxe e suporte a Tab.
- Execução real usando Pyodide/WebAssembly.
- Área para fornecer entradas de programas que usam `input()`, uma por linha.
- Terminal visual com saída, erros e botão para limpar.
- Código original preservado e versões corrigidas para arquivos com problemas evidentes.
- Copiar, restaurar, executar e marcar exercício como concluído.
- Progresso, último exercício e código personalizado salvos em `localStorage`.
- Layout responsivo com drawer lateral no celular.
- Página Sobre e manifesto de rotas para SPA.

## Tecnologias

- React + TypeScript
- Vite
- CodeMirror
- Pyodide 0.26.2 (Python via WebAssembly)
- Lucide React
- CSS responsivo sem dependência de backend
- Netlify e GitHub

## Arquitetura

```text
src/
├── components/CodeEditor.tsx   # Editor CodeMirror
├── data/exercises.ts            # Fonte central dos exercícios e metadados didáticos
├── services/pythonRunner.ts     # Carregamento lazy e execução persistente do Pyodide
├── App.tsx                      # Shell, dashboard, exercícios e progresso
├── main.tsx                     # Entrada React
└── styles.css                   # Identidade visual responsiva
original-exercises/              # Arquivos .py originais preservados
```

O Pyodide é carregado uma vez e reutilizado durante a sessão. A aplicação é estática: o Python roda no sandbox WebAssembly do navegador; o Netlify não precisa ter Python instalado.

## Executar localmente

Requisitos: Node.js 18+.

```bash
npm install
npm run dev
```

Abra o endereço informado pelo Vite. Para verificar a build de produção:

```bash
npm run build
npm run preview
```

Na primeira execução, o Pyodide pode levar alguns segundos para baixar e inicializar. A interface permanece disponível enquanto o status mostra **Preparando Python**.

## Como usar `input()`

No painel do exercício, escreva uma entrada por linha. Para este código:

```python
nome = input("Nome: ")
idade = int(input("Idade: "))
print(nome, idade)
```

Use no campo de entradas:

```text
Maria
25
```

O código é executado no próprio navegador com Pyodide; nenhuma chamada de backend é feita.

## Exercícios com problemas

O material original foi preservado em `original-exercises/` e na aba **Código original**. Quando a intenção era clara, a plataforma oferece **Versão corrigida**, como em `ex00.py`, `moeda.py` e `ex007.py`. Assim o estudante consegue comparar o erro com a solução sem perder o registro histórico do curso.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/python-na-pratica.git
git push -u origin main
```

Não inclua tokens, `node_modules`, `dist` ou arquivos temporários no repositório.

## Deploy no Netlify

O projeto já inclui `netlify.toml` com:

- Build command: `npm run build`
- Publish directory: `dist`
- Redirect SPA: `/* /index.html 200`

No Netlify, escolha **Add new site → Import an existing project**, selecione o repositório GitHub, confirme os valores acima e publique. Pyodide será baixado pelo navegador do visitante após a página abrir.

## Limitações importantes

- A primeira execução depende da conexão para baixar os arquivos do Pyodide.
- `input()` usa as entradas fornecidas no campo do terminal, uma por linha.
- O progresso é local ao navegador; não existe banco ou login.
- O código do estudante não é enviado ao servidor.

## Licença

Este projeto mantém a licença MIT do material original.
