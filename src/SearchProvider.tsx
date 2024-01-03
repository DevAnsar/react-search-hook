/**
 * @author Ansar Mirzayi <ansarmirzayi@gmail.com>
 * @fileoverview Search Context
 * @copyright Ansar Mirzayi 2023
 *
 * Copyright 2023 Ansar Mirzayi
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from 'react'
import SearchContext from './SearchContext'
import { InferStoreNames, SearchProviderProps } from './types'

/**
 * SearchProvider - The Search Context Provider
 *
 * @param children
 * @param stores
 *
 * @return Functional Component
 */
const SearchProvider: React.FunctionComponent<SearchProviderProps> = ({ children, stores }) => {
  type StoreNames = InferStoreNames<typeof stores extends string[] ? typeof stores : string[]>

  const initialState = React.useMemo(() => {
    if (!stores) {
      return {} as Record<StoreNames, string>
    }

    return stores.reduce(
      (acc, store) => {
        acc[store] = ''
        return acc
      },
      {} as Record<StoreNames, string>,
    )
  }, [stores])
  const [storesState, setStoresState] = React.useState<Record<StoreNames, string>>(initialState)

  const changeSearch = React.useCallback((storeName: StoreNames, value: string) => {
    setStoresState((prevStores) => ({
      ...prevStores,
      [storeName]: value,
    }))
  }, [])

  const contextValue = React.useMemo(
    () => ({
      stores: storesState,
      changeStoreValue: changeSearch,
    }),
    [storesState, changeSearch],
  )

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>
}

export default SearchProvider
