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
import SearchContext from '../SearchContext'

/**
 *@function
 *@name useSearch
 *@description A hook to access the search store
 *@returns - Search function
 */
const useSearch = (storeName: string) => {
  const context = React.useContext(SearchContext)
  if (!context) {
    throw new Error('Search Provider is missing.')
  }

  // Check if the provided store is allowed
  if (context.stores && context.stores[storeName] === undefined) {
    throw new Error(`Invalid store name: ${storeName}`)
  }

  const setSearch = React.useCallback(
    (value: string) => {
      context.changeStoreValue(storeName, value)
    },
    [context, storeName],
  )

  const search = context.stores ? context.stores[storeName] : ''
  return { search, setSearch }
}

/**
 *@exports useSearch
 */
export default useSearch
