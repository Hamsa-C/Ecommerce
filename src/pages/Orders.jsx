import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/orders")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.error(err);
        setOrders([]);
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className="orders-container">
        <h2 className="orders-title">My Orders</h2>

        {orders.length === 0 ? (
          <p className="no-orders">No Orders Found.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className="order-card">

              {order.product_img && (
                <img
                  src={order.product_img}
                  alt={order.product_name}
                  width="100"
                  height="100"
                />
              )}

              <div className="order-card-details">
                <h3>{order.product_name}</h3>

                <p>
                  <strong>Customer:</strong> {order.customer_name}
                </p>

                <p>
                  <strong>Email:</strong> {order.customer_email}
                </p>

                <p>
                  <strong>Mobile:</strong> {order.customer_phone}
                </p>

                <p>
                  <strong>Address:</strong> {order.customer_address}
                </p>

                <p>
                  <strong>Quantity:</strong> {order.product_quantity}
                </p>

                <p>
                  <strong>Total:</strong> ₹{order.total}
                </p>

                <p>
                  <strong>Order Date:</strong> {order.order_date}
                </p>

                <p>
                  <strong>Status:</strong> Ordered
                </p>
              </div>

            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Orders;