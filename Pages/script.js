//Adding an event listener to the add to cart button

let addToCart = document.querySelectorAll('.add-to-cart')
let cart = []
addToCart.forEach(button => {
    button.addEventListener('click', function(){
        // console.log(button)
    let jerseyId = button.getAttribute('id')
    // console.log(jerseyId)
    cart.push({id:jerseyId, name: })
    console.log(cart)


})
    
})









