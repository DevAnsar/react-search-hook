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
import { getfilterItems } from '../utils/filter'
import { UseSearchOptions, UseSearchResponse } from '../types'
import { invalidStoreNameError } from '../utils/errors'

/**
 * @function
 * @name useSearch
 * @description A hook to interact with the search store.
 * @param {string} storeName - The name of the search store.
 * @param {UseSearchOptions<TItem>} options - Optional configuration options.
 * @returns {UseSearchResponse<TItem>} An object containing search-related properties and functions.
 */
const useSearch = <TItem extends any>(
  storeName: string,
  options?: UseSearchOptions<TItem>,
): UseSearchResponse<TItem> => {
  const context = React.useContext(SearchContext)

  if (!context) {
    throw new Error('Search Provider is missing.')
  }

  // Check if the provided store is allowed
  if (context.stores && context.stores[storeName] === undefined) {
    throw invalidStoreNameError(storeName)
  }

  /**
   * Set the search value in the search store.
   * @function
   * @name setSearch
   * @param {string} value - The search value to set.
   */
  const setSearch = React.useCallback(
    (value: string) => {
      context.changeStoreValue(storeName, value)
    },
    [context, storeName],
  )

  // Get the current search value from the search store.
  const search = context.stores ? context.stores[storeName] : ''

  // Initialize an empty array for search results.
  let searchResult: TItem[] = []

  // If options include items and a search property, filter the items based on the search value.
  if (options && 'items' in options && options.items) {
    searchResult = getfilterItems(search, options.items, options.searchProp)
  }

  // This function returns an object with properties required for registering an input
  const register = () => {
    return { value: search, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value) }
  }

  // Return an object containing search-related properties and functions.
  return { search, setSearch, register, searchResult }
}

/**
 *@exports useSearch
 */
export default useSearch
