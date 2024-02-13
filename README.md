# ema-john-simple-resources
### Fake Products link: [https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON](https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON)


# fake store api
https://fakestoreapi.com/products

'https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON'


#Notes 

#Cart.js

    cart.reduce((total,product) => total + product.price,0);

    or

    let total = 0;
    for(let i=0; i<cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }


=> here cart is capturing the data from Shop.js

=> cart.reduce((total,product) =>  total + product.price,0); here product is capturing the click event and data from Product.js and cart is capturing the previous data from useState([]); total is the previous value of total and product.price is the current value of total and 0 is the initial value of total;

=> here reduce() is a function which is used to iterate the array and it takes two parameters: 1st is a function and 2nd is the initial value of the function.

#Product.js

=> 1: if I want to pass any parameters through the function then I have to use arrow function otherwise it will call the function automatically

=> 2: here handleAddToCard is a function which is passed from Shop.js

=> 3: here props.product is sending products to Shop.js. If its don't need to pass any parameters then I can use like this: onClick={props.handleAddToCard}

#Shope.js

=> here element is capturing the click event and data  from Product.js

=> const newCart = [...cart, element]; here element is capturing the click event and data  from Product.js and cart is capturing the previous data from useState([])



#NOTES:
/*
=> Review.js
##############################################
Hare are different way to get the same output.
    const count = Object.values(savedCart);
    #=>Method 2
    const count = productKeys.map(key => savedCart[key]);


    // handle removing the product
    const handleRemoveProduct = (key) => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        delete savedCart[key];
        localStorage.setItem('shopping_cart', JSON.stringify(savedCart)); // it will delete items manually
    } 
    #=>Method 2
    const removeProduct = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        deleteFromDb(productKey); //this is come from the fakedb.js file
    }


=> 
##############################################
*/


