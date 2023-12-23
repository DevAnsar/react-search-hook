<p align="center">
  
<a href="https://codecov.io/gh/react-search-hook">
  <img src="https://codecov.io/gh/react-search-hook/branch/main/graph/badge.svg?token=H188T7PXLL"/>
</a>
<a href="https://www.npmjs.com/package/react-search-hook">
    <img src="https://img.shields.io/npm/v/react-search-hook.svg?logo=npm" alt="Test Suites">
</a>
<a href="https://bundlephobia.com/result?p=react-search-hook">
    <img src="https://img.shields.io/bundlephobia/minzip/react-search-hook?style=flat-square" alt="Test Suites">
</a>
<a href="https://github.com/DevAnsar/react-search-hook/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="Test Suites">
</a>
<a>
    <img src="https://img.shields.io/npm/types/react-search-hook" alt="Test Suites">
</a>

</p>

## Introduction

**React Search Hook** is a light library for React, with which you can store the search text in the Store and use it in other components.

It is production-ready, and gives you the following:

- 📦 Very lightweight
- 🔧 Easy to use
- ⚛️ Build for React JS
- ⌨️ Highly typed and written in `TypeScript`

## Documentation

### 1. Install

npm

    npm i react-search-hook

yarn

    yarn add react-search-hook

### 2. Add provider to top of your component tree

```jsx
import { SearchProvider } from 'react-search-hook'
function App() {
  return <SearchProvider stores={['products',...]}>{children}</SearchProvider>
}
```

#### notice that `SearchProvider` needs an array of strings to make stores

### 3. Simply you can import useSearch hook everywere

```jsx
import { useSearch } from 'react-search-hook'
function MyExampleComponent() {
  const { search, setSearch } = useSearch('products')

  return (
    <div className='Search-box'>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <span>{search}</span>
    </div>
  )
}
```

#### notice that `useSearch` needs the store name

## Contributor ✨

[![Contributors](https://contrib.rocks/image?repo=DevAnsar/react-search-hook)](https://github.com/DevAnsar/react-search-hook/graphs/contributors)
