# 🛒 Lista de Compras React Native

Aplicativo simples de lista de compras desenvolvido em React Native, com armazenamento local utilizando AsyncStorage

---

## ✨ Funcionalidades

- ➕ Adicionar itens com descrição.
- ✅ Marcar itens como pendentes ou comprados.
- 🔍 Filtrar itens por status (Pendentes ou Comprados).
- 🗑️ Remover itens individualmente.
- 🧹 Limpar toda a lista de itens.
- 💾 Armazenamento persistente usando AsyncStorage.

---

## 🛠️ Tecnologias

- ⚛️ React Native
- 📝 TypeScript
- 📦 AsyncStorage (@react-native-async-storage/async-storage)
- 🎨 Lucide-react-native (ícones)
- 🎣 React Hooks (useState, useEffect)

---

## 📁 Estrutura do Projeto

- 📦 **/src/components** — Componentes reutilizáveis (Button, Input, Item, Filter, StatusIcon)
- 💾 **/src/storage** — Lógica de armazenamento local (itemStorage)
- 📚 **/src/types** — Definição de tipos e enums (FilterStatus)
- 🖥️ **/src/screens/Home.tsx** — Tela principal com a lista e funcionalidades
- 🎨 **/src/styles** — Estilos aplicados aos componentes

---

## 🚀 Como usar

### 🔧 Requisitos

- Node.js instalado
- React Native CLI ou Expo CLI
- Ambiente configurado para React Native (Android/iOS)

### 📥 Instalação

1. Clone o repositório:
git clone https://github.com/Alison010102/App_Comprar
cd App_Comprar

2.Copiar código: 

npm install
# ou
yarn install

3. Execute o app:
npx react-native run-android
# ou
npx react-native run-ios

🎯 Uso:


📝 Digite a descrição do item na caixa de texto.

➕ Toque em Adicionar para incluir o item na lista.

🔄 Use os filtros no topo para visualizar apenas itens Pendentes ou Comprados.

✅ Toque no ícone ao lado do item para alternar seu status.

🗑️ Toque no ícone de lixeira para remover um item.

🧹 Use o botão Limpar para remover todos os itens da lista.
