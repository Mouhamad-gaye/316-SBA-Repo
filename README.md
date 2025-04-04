my web application is focusing on selling jerseys. I have created a one page web to shows how sale use the web to gather data and improve their sale. 
I have created an HTML and Style CSS to give an attractiveness to the page.
in my JS, i decided to make my page dynamic for the user to have a great experience and easy path to buy what they want.
In my JS page, I added an event listener to the add to cart buttons located in every jersey div in the HTML file. The way i did it is I selected all add to cart class via querySelectorAll. 
Then loop through all buttons using the foreach method. for each button, a click event listener is added. when the button is clicked, the function inside the eventlistener is executed.
same for the cart link, i made it interactive by adding an event listener and add elements through the DOM (cart items, total, clear buttons) so that users have a good visibility.
