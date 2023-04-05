const getStoredCart = () =>{
    let shoppingCart = {};
    const carted = localStorage.getItem('shoppingCart');
    if(carted){
        shoppingCart = JSON.parse(carted);
    }
    return shoppingCart;
};

const addToCart = (id) => {
    let shoppingCart = getStoredCart();
    let quantity = shoppingCart[id];
    if (quantity){
        let newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const removeCart = () =>{
    localStorage.removeItem('shoppingCart');
    location.reload();
}
export {addToCart,getStoredCart,removeCart}