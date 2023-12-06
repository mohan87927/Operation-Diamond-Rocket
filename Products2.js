import { useEffect, useState } from "react";

const Products2 = () => {

    //Variables

    const productList = [
        { name: "Apple", price: 30 },
        { name: "Mango", price: 20 },
        { name: "Guava", price: 15 }
    ]

    const [cartItems, setCartItems] = useState([{ name: "Apple", price: 30 }])

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        setTotalPrice(getPrice());
    }, [cartItems])

    //Functions

    function addItem(index) {
        let tempCartItem = productList.filter((item, i) => (i === index))
        setCartItems([...cartItems, ...tempCartItem])
    }

    function removeItem(index) {
        let newCart = cartItems.filter((item, i) => (i != index))
        setCartItems(newCart)
    }

    function getPrice() {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        return total;
    }

    return (
        <div>
            <h1>Veggie-Kart</h1>
            <h2>Products :</h2>
            {productList.map((item, index) => (
                <ul>
                    <li key={index}>
                        <p>{item.name}  -  {item.price}</p>
                        <button onClick={() => addItem(index)}>ADD</button>
                    </li>
                </ul>
            ))
            }

            <h2>Cart :</h2>
            {cartItems.map((item, index) => (
                <ul>
                    <li key={index}>
                        <p>{item.name} - {item.price}</p>
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                </ul>
            ))}

            <h4>Total Price : {totalPrice}</h4>
        </div >
    )

}

export default Products2;