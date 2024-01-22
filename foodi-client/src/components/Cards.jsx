import React, { useContext, useState } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import { data } from "autoprefixer";
import Swal from 'sweetalert2'
import useCart from "../hooks/useCart";

const Cards = ({ item }) => {

  const navigate = useNavigate()
  const location = useLocation()

  const { name, image, price, recipe, _id } = item

  const [isHeartFilled, setIsHeartFilled] = useState(false);
  const { user } = useContext(AuthContext)

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };
  //Add to Cart
  const handleAddtoCart = (item) => {
    // console.log(item);
    if (user && user?.email) {
      const cartItem = { menuItem: _id, name, quantity: 1, image, price, email: user.email };
      // console.log(cartItem);
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
           
            Swal.fire({
              position: "position-absolute top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          
          }
          
        })
    }else{
      Swal.fire({
  title: "Please Login!",
  text: "Without an account can't able to products",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Signup Now"
}).then((result) => {
  if (result.isConfirmed) {
   navigate('/signup',{state:{from:location}})
  }
});

    }
  }
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl relative">
        <div
          className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFilled ? "text-rose-500" : "text-white"
            }`}
          onClick={handleHeartClick}
        >
          <FaHeart className="h-5 w-5 cursor-pointer" />
        </div>
        <Link to={`/menu/${item._id}`}>
          <figure>
            <img
              src={item.image}
              alt=""
              className="hover:scale-105 transition-all duration-200 md:h-72"
            />
          </figure>
        </Link>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-between items-center">
            <h5 className=" font-semibold">
              <span className="text-sm text-red">${item.price}</span>
            </h5>
            <button className="btn bg-green text-white" onClick={() => handleAddtoCart(item)}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
