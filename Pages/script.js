//Adding an event listener to the add to cart buttons

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
function addItemsCart(jerseys) {
    let selectedItems = cart1.find(item => item.id === jerseys.id)
    console.log(selectedItems)
    if (selectedItems) {
        selectedItems.quantity++
    } else {
        cart1.push({ ...jerseys, quantity: 1 })
        console.log(cart1)
    }

    cart1.forEach(jerseys => {
    let cartItems = document.createElement('Items');
    cartItems.textContent = `${jerseyName.name} - $${jerseyPrice} (x${jerseys.quantity})`
    cartDiv.appendChild(cartItems)
})

    let Total  = cart1.reduce((Total, jerseyPrice) => Total + (jerseyPrice * quantity), 0)
    let cartTotal = document.createElement('Total');
    cartTotal.textContent = `Total: $${cartTotal.tofixed(2)}`
    cartDiv.appendChild(cartTotal)

    let cartClear = document.createElement('button');
    cartClear.textContent = 'Clear Cart';
    cartClear.addItemsCart('click', () => {
        cart1 = []
        addItemsCart()
    })
    cartDiv.appendChild(cartClear)
}







