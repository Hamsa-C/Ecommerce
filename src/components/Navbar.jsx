import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="left">
        <img
          className="logo"
          src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=1200x900&vertical=center"
          alt="Logo"
        />
      </div>

      <div className="right">
        <h2
          
        >
          Products
        </h2>

        <h2
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/orders")}
        >
          Orders
        </h2>
      </div>
    </div>
  );
};

export default Navbar;