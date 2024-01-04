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

**React Search Hook** is a lightweight library for React, with which you can store the search text in the Store and use it in other components.

**Visit online [demo](https://devansar.github.io/react-search-hook/)**

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

CDN

- unpkg: https://unpkg.com/react-search-hook@0.1.0/dist/index.umd.js

- jsdelivr: https://cdn.jsdelivr.net/npm/react-search-hook@0.1.0/dist/index.umd.js

<a href="https://www.jsdelivr.com/package/npm/react-search-hook"><img alt="" src="https://data.jsdelivr.com/v1/package/npm/react-search-hook/badge"></a>

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
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      <span>{search}</span>
    </div>
  )
}
```

#### notice that `useSearch` needs the store name

### If you need to filter some array of data, simply you can pass items to `useSearch` hook

```jsx
import { useSearch } from 'react-search-hook'
function MyExampleComponent() {
  const items = ['text1', 'text2', ...]
  const { search, setSearch, searchResult } = useSearch('products', { items })

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} />
      {searchResult.map((item, key) => (
        <li>{JSON.stringify(item)}</li>
      ))}
    </div>
  )
}
```

## APIs

### useSearch(name,options)

| Name    | Type                      | Required | Description                      |
| ------- | ------------------------- | -------- | -------------------------------- |
| name    | string                    | yes      | The name of store                |
| options | object `UseSearchOptions` | no       | Pay attention to the table below |

#### useSearch options\*

| Name       | Type                        | Required                   | Description                                                                |
| ---------- | --------------------------- | -------------------------- | -------------------------------------------------------------------------- |
| items      | array of strings or objects |                            | The array of strings or objects to be filtered                             |
| searchProp | string                      | yes if each item is object | If each item is an object, it specifies the desired property of the filter |

## Contributor ✨

[![Contributors](https://contrib.rocks/image?repo=DevAnsar/react-search-hook)](https://github.com/DevAnsar/react-search-hook/graphs/contributors)
