module.exports = () => {
  const data = { categories: [], products: [] }
  // Create 1000 users
  for (let i = 0; i < 10; i++) {
    data.categories.push({ id: i, name: `Category ${i}` })
  }

  for (let j = 1; j <= data.categories.length; j++) {
    for (let i = 100 * j - 100 + 1; i <= 100 * j; i++) {
      data.products.push({ id: i, name: `Product ${i}`, categoryId: j, price: 20.99 })
    }
  }

  return data
}