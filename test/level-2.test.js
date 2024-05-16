import { describe, it } from 'mocha'
import assert from 'assert'
import { countCoins, countNotes } from '../lib/level-2.js'

const drawer = [
  { name: 'penny', value: 1, quantity: 72 },
  { name: 'nickel', value: 5, quantity: 41 },
  { name: 'dime', value: 10, quantity: 31 },
  { name: 'quarter', value: 25, quantity: 17 },
  { name: 'one', value: 100, quantity: 90 },
  { name: 'five', value: 500, quantity: 11 },
  { name: 'ten', value: 1000, quantity: 2 },
  { name: 'twenty', value: 2000, quantity: 3 },
  { name: 'hundred', value: 10000, quantity: 1 }
]

describe('countCoins', function () {
  it('counts the number of coins', function () {
    assert.strictEqual(countCoins(drawer), 161)
  })
})

describe('countNotes', function () {
  it('counts the number of notes', function () {
    assert.strictEqual(countNotes(drawer), 107)
  })
})
