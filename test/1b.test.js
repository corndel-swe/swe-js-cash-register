import { describe, it } from 'mocha'
import assert from 'assert'
import renameBook from '../exercises/1b.js'

// Sample recipe book for testing
const recipeBook = {
  title: 'My Recipe Book'
}

describe('renameBook', function () {
  it('renames the recipe book to the new name', function () {
    const newName = 'Good Eats'
    const expectedBook = { title: 'Good Eats' }
    assert.deepStrictEqual(renameBook(recipeBook, newName), expectedBook)
  })
})
