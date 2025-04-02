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
        console.log(`Added Item in cart: ${button.parentElement.querySelector('h3').textContent}`)
        // console.log(cart)
    })
})


 //Get the cart button to be interactive


let cartMenu = document.querySelector('a[href="#cart"]')
let cartDiv = document.createElement('div');
let cartItems = document.createElement('Items');
let cartTotal = document.createElement('Total');
let cartClear = document.createElement('Clear');

cartDiv.appendChild(cartItems)
cartDiv.appendChild(cartTotal)
cartDiv.appendChild(cartClear)
cartMenu.appendChild(cartDiv)

console.log(cartMenu)

// Add event listener to the cart button

cartMenu.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

    

// Adding items in cart

function addItemsCart (jerseys) {
    let selectedItems = cart.filter(item => item.id === jerseyId)
    // console.log(selectedItems)
    if(selectedItems){
        selectedItems.quantity++
    } else {
        cart.push({...jerseys, quantity: 1 })
        // console.log(cart)
    }
   
   
}












