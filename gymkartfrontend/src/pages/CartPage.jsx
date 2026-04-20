import React, { useEffect, useState } from "react";
import axios from "axios";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

    // Fetch cart items
    const fetchCart = async () => {
        try {
            const res = await axios.get("https://gymkart-backend-20.onrender.com/cart/items");
            setCartItems(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Fetch total amount
    const fetchTotal = async () => {
        try {
            const res = await axios.get("https://gymkart-backend-20.onrender.com/cart/total");
            setTotal(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCart();
        fetchTotal();
    }, []);

    // Increase quantity
    const increaseQty = async (id) => {
        await axios.put(`https://gymkart-backend-20.onrender.com/cart/increase/${id}`);
        fetchCart();
        fetchTotal();
    };

    // Decrease quantity
    const decreaseQty = async (id) => {
        await axios.put(`https://gymkart-backend-20.onrender.com/cart/decrease/${id}`);
        fetchCart();
        fetchTotal();
    };

    // Remove item
    const removeItem = async (id) => {
        await axios.delete(`https://gymkart-backend-20.onrender.com/cart/remove/${id}`);
        fetchCart();
        fetchTotal();
    };

    // Clear cart
    const clearCart = async () => {
        await axios.delete("https://gymkart-backend-20.onrender.com/cart/clear");
        fetchCart();
        fetchTotal();
    };

    // Payment
    const handlePayment = async () => {
        if (total <= 0) {
            alert("Your cart is empty");
            return;
        }

        try {
            // Create order from backend
            const response = await axios.post(
                "https://gymkart-backend-20.onrender.com/cart/payment/createOrder",
                { amount: total }
            );

            const order = response.data;

            const options = {
                key: "rzp_test_SUNvosgFmwxxZ3",
                amount: order.amount,
                currency: "INR",
                name: "GymKart",
                description: "Payment for cart items",
                order_id: order.id,
                handler: async function (paymentResult) {
                    alert("Payment Successful!");
                    console.log(paymentResult);

                    // Clear cart after payment
                    await axios.delete("https://gymkart-backend-20.onrender.com/cart/clear");
                    setCartItems([]);
                    setTotal(0);
                },
                prefill: {
                    name: "Customer",
                    email: "customer@example.com",
                    contact: "9999999999",
                },
                theme: { color: "#3399cc" },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        } catch (error) {
            console.log(error);
            alert("Payment Failed");
        }
    };

    return (
        <div className="container mt-4 text-center">
            <h1 className="mb-4" style={{ fontFamily: "monospace" }}>
                Your Cart
            </h1>

            {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
            ) : (
                <table className="table table-dark table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cartItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>₹ {item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger me-2"
                                        onClick={() => decreaseQty(item.id)}
                                    >
                                        -
                                    </button>

                                    {item.quantity}

                                    <button
                                        className="btn btn-sm btn-success ms-2"
                                        onClick={() => increaseQty(item.id)}
                                    >
                                        +
                                    </button>
                                </td>
                                <td>₹ {item.price * item.quantity}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-warning"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <h3 className="mt-3">Grand Total: ₹ {total}</h3>

            <button className="btn btn-danger mt-3 me-3" onClick={clearCart}>
                Clear Cart
            </button>

            <button className="btn btn-primary mt-3" onClick={handlePayment}>
                Pay Now
            </button>
        </div>
    );
};

export default CartPage;