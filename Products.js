import React, { useEffect, useState } from "react";

const Products = () => {

    const productList = [
        { name: "Apple", price: 30 },
        { name: "mango", price: 20 },
        { name: "orange", price: 15 }
    ];

    const [cartItems, setCartItems] = useState([{ name: "Apple", price: 30 }])

    const [totalPrice, setTotalPrice] = useState(getPrice())

    useEffect(() => {
        setTotalPrice(getPrice());
    }, [cartItems])

    //Functions

    function addItem(index) {
        let tempCartItem = productList.filter((item, i) => (i === index))
        setCartItems([...cartItems, ...tempCartItem]);
    }

    function removeItem(index) {
        let newCart = cartItems.filter((item, i) => (i != index))
        setCartItems(newCart)
    }

    function getPrice() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price
        });
        return total;
    }

    return (
        <div>
            <h2>Products:</h2>
            <ul>
                {productList.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}-₹{item.price}</p>
                        <button onClick={() => addItem(index)}>Add</button>
                    </li>
                ))}
            </ul>

            <h2>Cart Items:</h2>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        <p>{item.name}-{item.price}</p>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>

            <h4>Total Price:{totalPrice}</h4>

            <button onClick={() => alert(`Total Price Is : ${totalPrice}`)}>Proceed</button>

        </div >
    );

}

export default Products;