// Example product data
var products = [
    { id: '1', name: 'Product 1', description: 'This is a description of Product 1.' },
    { id: '2', name: 'Product 2', description: 'This is a description of Product 2.' },
    // Add more products as necessary
];

// Add products to the product list
var productList = document.getElementById('product-list');
products.forEach(function(product) {
    var productDiv = document.createElement('div');
    productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <button onclick="alert('Product ${product.id} purchased!')">Purchase</button>
    `;
    productList.appendChild(productDiv);
});
