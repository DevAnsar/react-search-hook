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

export const getfilterItems = <TItem extends any>(searchText: string, items: TItem[], searchProp?: string): TItem[] => {
  console.log('i', typeof items[0] === 'object', searchProp)
  if (typeof items[0] === 'string') {
    // If data is an array of strings, filter based on the search term
    return items.filter((item) => (item as string).toLowerCase().includes(searchText.toLowerCase()))
  } else if (items.length > 0 && typeof items[0] === 'object' && searchProp) {
    // If data is an array of objects, filter based on the specified property
    return items.filter((item) => {
      if (typeof item === 'object' && item !== null && searchProp in item) {
        const propValue = (item as Record<string, any>)[searchProp]
        return propValue && String(propValue).toLowerCase().includes(searchText.toLowerCase())
      }
      return false
    })
  } else {
    // Handle other data types or undefined data
    return [] as TItem[]
  }
}
