//Adding an event listener to the add to cart button

let addToCart = document.querySelectorAll('.add-to-cart')
let cart = []
addToCart.forEach(button => {
    button.addEventListener('click', function(){
        // console.log(button)
    let jerseyId = button.getAttribute('id')
    let jerseyName = button.parentElement.querySelector('h3').textContent
    let jerseyImage = button.parentElement.querySelector('img').getElementsByTagName('img')
    cart.push({id:jerseyId, name: jerseyName, Image: jerseyImage})
    console.log(cart)


})
    
})









