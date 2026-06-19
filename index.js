function calculateTax(amount) {
  return amount * 0.10
}

function convertToUpperCase(text) {
  return text.toUpperCase()
}

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2
}

function isPalindrome(word) {
  const reversed = word.split("").reverse().join("")
  return word === reversed
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = originalPrice * (discountPercentage / 100)
  return originalPrice - discountAmount
}

console.log(calculateTax(amount));
console.log(convertToUpperCase(text));
console.log(findMaximum(num1, num2));
console.log(isPalindrome(word));
console.log(calculateDiscountedPrice(originalPrice, discountPercentage));

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };