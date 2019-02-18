/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
  if (n === 1) return m;
  return m * pow(m, n - 1);
}
