export const invalidStoreNameError = (storeName: string) =>
  Error(`
    Invalid store name: ${storeName}
    Make sure you have defined the ${storeName} store for the SearchProvider
    For more information, please refer to: https://github.com/DevAnsar/react-search-hook?tab=readme-ov-file#2-add-provider-to-top-of-your-component-tree
  `)
