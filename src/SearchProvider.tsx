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
import { InferStoreNames, SearchProviderProps, StoreData } from './types'

/**
 * SearchProvider - The Search Context Provider
 *
 * @param children
 * @param stores
 *
 * @return Functional Component
 */
const SearchProvider: React.FunctionComponent<SearchProviderProps> = ({ children, stores }) => {
  type StoreNames = InferStoreNames<typeof stores>

  const [storesState, setStoresState] = React.useState<StoreData<StoreNames>[]>([])

  //
  React.useEffect(() => {
    const initStateDate: StoreData<StoreNames>[] = stores.map((store) => ({
      name: store,
      value: '',
    }))
    setStoresState(initStateDate)
  }, [stores])

  const changeSearch = (storeName: StoreNames, value: string) => {
    setStoresState(
      (prevStores) =>
        prevStores?.map((prevStore) => {
          if (prevStore.name === storeName) {
            return { name: prevStore.name, value }
          } else {
            return prevStore
          }
        }),
    )
  }

  return (
    <SearchContext.Provider value={{ stores: storesState, changeStoreValue: changeSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider
