// Dummy product data
const products = [
    {
        id: 1,
        title: 'iPhone 13',
        category: 'Mobiles',
        location: 'New York',
        price: '$999',
        image: 'https://source.unsplash.com/200x200/?iphone',
        description: 'Latest iPhone 13 with 128GB storage, great condition.'
    },
    {
        id: 2,
        title: 'Honda Civic 2020',
        category: 'Cars',
        location: 'Los Angeles',
        price: '$18,000',
        image: 'https://source.unsplash.com/200x200/?car',
        description: 'A well-maintained 2020 Honda Civic with low mileage.'
    },
    {
        id: 3,
        title: 'Samsung TV 55 inch',
        category: 'Electronics',
        location: 'Chicago',
        price: '$600',
        image: 'https://source.unsplash.com/200x200/?tv',
        description: 'Smart TV with 4K UHD resolution, hardly used.'
    }
];

// Load products into product list
function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4" data-bs-toggle="modal" data-bs-target="#productModal" onclick="showProductDetails(${product.id})">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.price}</p>
                        <p class="card-text"><small class="text-muted">${product.location}</small></p>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

// Show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h5>${product.title}</h5>
        <p>${product.description}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Location:</strong> ${product.location}</p>
    `;
}

// Initialize products on page load
window.onload = function() {
    loadProducts();
}
