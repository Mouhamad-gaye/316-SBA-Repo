//Adding an event listener to the add to cart buttons

let addToCart = document.querySelectorAll('.add-to-cart')
let cart = []
addToCart.forEach(button => {
    button.addEventListener('click', function () {
        console.log(button)
        let jerseyId = button.getAttribute('id')
        let jerseyName = button.parentElement.querySelector('h3').textContent
        let jerseyImage = document.querySelector('img')
        let jerseyPrice = button.parentElement.querySelector('p').textContent
        cart.push({ id: jerseyId, name: jerseyName, Image: jerseyImage, Price: jerseyPrice })
        window.alert('You have added an item in your cart')
        console.log(`Added Item in cart: ${button.parentElement.querySelector('h3').textContent}`)
        console.log(cart)
    })
})

//Get the cart link to be interactive

let cartMenu = document.querySelector('a[href="#cart"]')
let cartDiv = document.createElement('div');

cartMenu.appendChild(cartDiv)
console.log(cartMenu)


// Add event listener to the cart link

cartMenu.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

// Adding items in cart

let cart1 = []
function addItemsCart(items) {
    let selectedItems = cart1.find(items => items.id === jerseys.id)
    console.log(selectedItems)
    if (selectedItems) {
        selectedItems.quantity++
    } else {
        cart1.push({ ...items, quantity: 1 })
        console.log(cart1)
    }

    cart1.forEach(items => {
        let cartItems = document.createElement('div');
        cartItems.textContent = `${items.name} - $${items.Price} (x${items.quantity})`
        cartDiv.appendChild(cartItems)
        console.log(cartItems)
    })

    let Total = cart1.reduce((acc, items) => acc + items.Price * quantity, 0)
    let cartTotal = document.createElement('div');
    cartTotal.textContent = `Total: $${cartTotal.toFixed(2)}`
    cartDiv.appendChild(cartTotal)
    console.log(cartTotal)

    let cartClear = document.createElement('button');
    cartClear.textContent = 'Clear Cart';
    cartClear.addEventListener('click', () => {
        cart1 = []
        addItemsCart()
    })
    cartDiv.appendChild(cartClear)
    console.log(cartClear)
}