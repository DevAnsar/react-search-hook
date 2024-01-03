import React from 'react'
import { renderHook } from '@testing-library/react'
import useSearch from '../../hooks/useSearch'
import SearchProvider from '../../SearchProvider'
import SearchContext from '../../SearchContext'
import { act } from 'react-dom/test-utils'
import { SearchContextType, UseSearchOptions } from '../../types'

describe('useSearch', () => {
  it('should thrown an error if the SearchContext is not available', () => {
    expect(useSearch).toThrow(Error)
  })

  it('useSearch should throw Error when store name is not find', () => {
    const fakeSearchState = {
      stores: {},
      changeStoreValue: jest.fn(),
    }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchState}>{children}</SearchContext.Provider>
    )

    expect(() => renderHook(() => useSearch('product'), { wrapper })).toThrow(Error(`Invalid store name: product`))
  })

  it('should get search value from context with useSearch successfully', () => {
    const fakeSearchState = {
      stores: { product: 'test_product' },
      changeStoreValue: jest.fn(),
    }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchState}>{children}</SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('product'), { wrapper })
    expect(result.current.search).toEqual('test_product')
  })

  it('should define search when it specify with SearchProvider', () => {
    const fakeSearchState = {
      stores: {},
      changeStoreValue: jest.fn(),
    }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchState}>
        <SearchProvider stores={['product']}>{children}</SearchProvider>
      </SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('product'), { wrapper })
    expect(result.current.search).toBeDefined()
  })

  it('should update search state with setSearch', () => {
    const fakeSearchState = {
      stores: {},
      changeStoreValue: jest.fn(),
    }
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchState}>
        <SearchProvider stores={['product']}>{children}</SearchProvider>
      </SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('product'), { wrapper })
    act(() => {
      result.current.setSearch('product_search_value')
    })
    expect(result.current.search).toEqual('product_search_value')
  })

  it('should filter data with search value (array of string)', () => {
    const fakeSearchContextValue: SearchContextType = {
      stores: {},
      changeStoreValue: jest.fn(),
    }

    const fakeItems: string[] = ['product1', 'product2', 'product3', 'product3', 'product4']
    const fakeUseSearchOptions: UseSearchOptions = { items: fakeItems }

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchContextValue}>
        <SearchProvider stores={['products']}>{children}</SearchProvider>
      </SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('products', fakeUseSearchOptions), { wrapper })
    act(() => {
      result.current.setSearch('product3')
    })
    expect(result.current.searchResult).toEqual(['product3', 'product3'])
  })

  it('should filter data with search value (array of object - with correct searchProp)', () => {
    const fakeSearchContextValue: SearchContextType = {
      stores: {},
      changeStoreValue: jest.fn(),
    }

    const fakeItems = [
      { name: 'product1' },
      { name: 'product2' },
      { name: 'product3' },
      { name: 'product3' },
      { name: 'product4' },
    ]
    const fakeUseSearchOptions: UseSearchOptions<{ name: string }> = { items: fakeItems, searchProp: 'name' }

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchContextValue}>
        <SearchProvider stores={['products']}>{children}</SearchProvider>
      </SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('products', fakeUseSearchOptions), { wrapper })
    act(() => {
      result.current.setSearch('product3')
    })
    expect(result.current.searchResult).toHaveLength(2)
  })

  it('should filter data with search value (array of object - with non-correct searchProp)', () => {
    const fakeSearchContextValue: SearchContextType = {
      stores: {},
      changeStoreValue: jest.fn(),
    }

    const fakeItems = [{ name: 'product1' }, { name: 'product2' }]
    const fakeUseSearchOptions: UseSearchOptions<{ name: string }> = { items: fakeItems, searchProp: 'name1' }

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SearchContext.Provider value={fakeSearchContextValue}>
        <SearchProvider stores={['products']}>{children}</SearchProvider>
      </SearchContext.Provider>
    )
    const { result } = renderHook(() => useSearch('products', fakeUseSearchOptions), { wrapper })
    act(() => {
      result.current.setSearch('product1')
    })
    expect(result.current.searchResult).toHaveLength(0)
  })
})
