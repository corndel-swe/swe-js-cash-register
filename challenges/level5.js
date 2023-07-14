const drawer = require('../drawer')

// Level 5

/**
 * Works out the amount of change the customer is owed based on the cost of their items
 * and the amount they have paid. Adds the customers paid amount to the drawer, removes
 * their change from the drawer, then returns the new drawer.
 *
 * E.g. (15, 20, drawer) adds 20 to the drawer, and removes 5 from the drawer to give to
 * customer as change
 *
 * N.b. change should be given in the largest denominations available, i.e. 2.25 should be
 * 2 dollar bills and 1 quarter (if available) rather than 2 dollar bills and 5 nickels
 * (however if no quarters and dimes are available you will use nickels, etc)
 *
 * @param {number} cost - the cost of the customer's basket
 * @param {number} paid - the amount of cash they hand the cashier
 * @param {object[]} drawer
 * @returns {object[]} the drawer, after the transaction has taken place
 */
function transaction(cost, paid, drawer) {
  // code here
}
