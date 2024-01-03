import { render, screen } from '@testing-library/react'
import SearchProvider from '../SearchProvider'
import React from 'react'

describe('SearchProvider renders successfully', () => {
  it('With array of store names', () => {
    render(
      <SearchProvider stores={['products']}>
        <div>Empty</div>
      </SearchProvider>,
    )
  })
})

// describe('SearchProvider renders successfully', () => {
//   it('Without any store names props', () => {
//     render(
//       <SearchProvider>
//         <div>Empty</div>
//       </SearchProvider>,
//     )
//   })
// })
