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

/**
 * Context values type
 */
export type SearchContextType = {
  stores: Record<string, string>
  changeStoreValue: (storeName: string, value: string) => void
}

/**
 * Search Provider Props
 */
export interface SearchProviderProps {
  children: React.ReactNode
  stores?: string[]
}

export type InferStoreNames<T extends string[]> = T[number]

/*
 * Store type
 */
export interface StoreData<T = string> {
  name: T
  value: string
}

/*
 * useSearch response type
 */
export interface UseSearchResponse<TItem = any> {
  search: string
  setSearch: (value: string) => void
  searchResult: TItem[]
}

/*
 * Options type for useSearch hook
 */
export interface UseSearchOptions<T = string> {
  items?: T[]
  searchProp?: string
}
