//Adding an event listener to the add to cart button

let addToCart = document.querySelectorAll('.add-to-cart')
let cart = []
addToCart.forEach(button => {
    button.addEventListener('click', function () {
        // console.log(button)
        let jerseyId = button.getAttribute('id')
        let jerseyName = button.parentElement.querySelector('h3').textContent
        let jerseyImage = document.querySelector('img')
        let jerseyPrice = button.parentElement.querySelector('p').textContent
        cart.push({ id: jerseyId, name: jerseyName, Image: jerseyImage, Price: jerseyPrice })
        console.log(`Added Item in cart: ${button.parentElement.querySelector('h3').textContent}`)
        // console.log(cart)
    })
})

let cartMenu = document.getElementById('cart');
let cartDiv = document.createElement('div');
let cartItems = document.createElement('Cart Items');
let cartTotal = document.createElement('Cart Total');
let cartClear = document.createElement('Clear Cart');

cartDiv.appendChild(cartItems)
cartDiv.appendChild(cartTotal)
cartDiv.appendChild(cartClear)
cartDiv.appendChild(cartMenu)

function 












