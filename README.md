
---

# 🧩 Fullstack Cadastro de Produtos

Este é um projeto **Full Stack** desenvolvido com **TypeScript**, **React**, **Tailwind CSS**, **Express** e **Prisma ORM**.
O objetivo principal é **estudar e praticar o desenvolvimento full stack**, integrando frontend e backend em uma aplicação simples de **cadastro de produtos**.

> ⚠️ **Status do projeto:** Em desenvolvimento
> Este projeto foi criado **para fins de estudo**, servindo como base para aprimorar conhecimentos sobre o ecossistema **TypeScript**, **React**, **Node.js** e **Prisma**.

---

## 🚀 Tecnologias Utilizadas

### **Frontend**

* ⚛️ [React](https://react.dev/)
* 💅 [Tailwind CSS](https://tailwindcss.com/)
* 🟦 [TypeScript](https://www.typescriptlang.org/)

O frontend tem como objetivo apenas **exibir e interagir com os produtos** cadastrados, de forma simples e direta, sem foco em design avançado.
É responsável pela **visualização dos dados** e pela **comunicação com a API** do backend.

---

### **Backend**

* 🧠 [Node.js](https://nodejs.org/)
* ⚙️ [Express](https://expressjs.com/)
* 🗃️ [Prisma ORM](https://www.prisma.io/)
* 🟨 [TypeScript](https://www.typescriptlang.org/)

O backend concentra toda a **lógica de negócio** e **manipulação do banco de dados**, permitindo as operações de:

* 🔹 Criar novos produtos
* 🔹 Editar produtos existentes
* 🔹 Excluir produtos
* 🔹 Listar produtos cadastrados

O **Prisma** é utilizado para facilitar a comunicação com o banco de dados, fornecendo tipagem e segurança em tempo de desenvolvimento.

---

## 📂 Estrutura do Projeto

```
📦 fullstack_cadastro_produtos/
├── 📁 backend/
|   ├── prisma/               # Configuração do schema e conexão url do prisma
│   ├── src/
│   │   ├── server.ts         # Ponto de entrada do servidor Express
│   │   ├── routes/           # Rotas da aplicação
│   │   ├── controllers/      # Lógica de CRUD
|   |   ├── @types/           # Tipos do projeto
|   |   ├── configs/          # Instância única da conexão do prisma
│   └── package.json
│
├── 📁 frontend_produtos/
│   ├── src/
│   │   ├── App.tsx           # Componente principal
│   │   ├── components/       # Componentes reutilizáveis
|   |   ├── api/              # Chamadas ao backend
|   |   ├── types/            # Tipos do projeto
│   └── package.json
│

```

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/EduardoSantos2231/fullstack_cadastro_produtos.git
cd fullstack_cadastro_produtos
```

### 2️⃣ Instalar dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend_produtos
npm install
```

### 3️⃣ Configurar o Banco de Dados

No diretório `backend`, crie o arquivo `.env`:

```env
DATABASE_URL="file:./dev.db"
```

Depois execute as migrações:

```bash
npx prisma migrate dev
```

### 4️⃣ Iniciar o backend

```bash
npm run dev
```

### 5️⃣ Iniciar o frontend

```bash
cd ../frontend_produtos
npm start
```

A aplicação estará disponível em:

* 🌐 **Frontend:** [http://localhost:5173](http://localhost:5173)
* ⚙️ **Backend:** [http://localhost:3000](http://localhost:3000)

---

## 📌 Status Atual

* ✅ Estrutura inicial configurada
* ✅ Integração com Prisma funcionando
* ✅ CRUD básico implementado no backend
* 🧩 Frontend simples para visualização dos produtos
* 🔄 Projeto ainda em desenvolvimento (melhorias e novas features virão)

---

## 📚 Próximos Passos

* [ ] Melhorar interface e feedback visual
* [ ] Adicionar validações e tratamento de erros
* [ ] Implementar autenticação simples
* [ ] Criar página de cadastro e edição de produtos no frontend

---

## 💬 Sobre o Projeto

Este repositório foi criado **para fins de aprendizado**, explorando a integração entre **React + Express + Prisma** com **TypeScript**.
O foco está em compreender a estrutura e funcionamento de uma aplicação **full stack moderna**, com camadas bem definidas e código tipado.

---

