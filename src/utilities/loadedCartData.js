import { getStoredCart } from "../Components/function/fakeDb";

const loadedData = async() => {
    const dataes = await fetch('products.json');
    const products = await dataes.json();
    let storedCart = getStoredCart();
    let cartedProduct = [];
    if(storedCart){
        for(let id in storedCart){
            const savedCart = products.find(pd => pd.id === id);
            if(savedCart){
                let quantity = storedCart[id];
                savedCart.quantity = quantity;
                cartedProduct.push(savedCart);
            }
        }
    }
    console.log(cartedProduct);
    return cartedProduct;
}    

export default loadedData;