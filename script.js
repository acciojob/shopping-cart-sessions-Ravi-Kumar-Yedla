// This is the boilerplate code given for you
// You can modify this code
// Product data
const productsData = [
            { id: 1, name: "Product 1", price: 10 },
            { id: 2, name: "Product 2", price: 20 },
            { id: 3, name: "Product 3", price: 30 }
        ];

        function renderProducts() {
            const productList = document.getElementById("product-list");
            productList.innerHTML = "";
            productsData.forEach(product => {
                const li = document.createElement("li");
                li.innerHTML = `
                    ${product.name} - $${product.price}
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(li);
            });
        }

        function addToCart(productId) {
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            const product = productsData.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                sessionStorage.setItem("cart", JSON.stringify(cart));
                renderCart();
            }
        }

        function renderCart() {
            const cartList = document.getElementById("cart-list");
            let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            cartList.innerHTML = "";
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - $${item.price}`;
                cartList.appendChild(li);
            });
        }

        function clearCart() {
            sessionStorage.removeItem("cart");
            renderCart();
        }

        document.getElementById("clear-cart-btn").addEventListener("click", clearCart);

        window.onload = function() {
            renderProducts();
            renderCart();
        };

// Render cart list
// function renderCart() {}

// // Add item to cart
// function addToCart(productId) {}

// // Remove item from cart
// function removeFromCart(productId) {}

// // Clear cart
// function clearCart() {}

// // Initial render
// renderProducts();
// renderCart();
