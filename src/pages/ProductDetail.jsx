import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}/`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  function inc() {
    setQuantity(quantity + 1);
  }

  function dec() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const renderStars = (rating) => {
    const stars = [];

    rating = Number(rating);

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} color="gold" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} color="gold" />);
      } else {
        stars.push(<FaRegStar key={i} color="gold" />);
      }
    }

    return stars;
  };

  function placeOrder(e) {
    e.preventDefault();

    const order = {
      customer_id: localStorage.getItem("userId"),
      customer_name: name,
      customer_email: email,
      customer_phone: mobile,
      customer_addres: address,
      product_id: product.id,
      product_name: product.product_name,
      product_quantity: quantity,
      total: quantity * product.product_price,
      order_date: new Date().toLocaleDateString(),
      product_img: product.product_image,
    };

    axios
      .post("http://localhost:3000/orders", order)
      .then(() => {
        toast.success("Order placed");
        navigate("/success");
      })
      .catch(() => toast.error("Failed to place order"));
  }

  return (
    <>
      <Navbar />

      <center>
        <h1>{product.product_name}</h1>
      </center>

      <center>
        <img src={product.product_image} height="300px" alt={product.product_name} />
      </center>

      <h3>Price: ₹{product.product_price}</h3>

      <p>
        <b>Specification:</b> {product.product_description}
      </p>

      <p>
        <b>Ratings:</b>{" "}
        {renderStars(product.product_ratings)} ({product.product_ratings}/5)
      </p>

      <button onClick={dec}>-</button>
      <h2>{quantity}</h2>
      <button onClick={inc}>+</button>

      <form onSubmit={placeOrder}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Enter Mobile No"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <textarea
          placeholder="Enter Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <br />

        <button type="submit">Order</button>
      </form>
    </>
  );
};

export default ProductDetail;