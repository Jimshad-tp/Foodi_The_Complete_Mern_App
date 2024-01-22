import React, { useContext } from 'react'
import useCart from '../../hooks/useCart'
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { AuthContext } from '../../contexts/AuthProvider';
   
const CartPage = () => {
  const {user} = useContext(AuthContext)
  const [cart, refetch] = useCart()
console.log(user);
const handleDelete = (item) => {
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:5000/carts/${item._id}`,{
      method:"DELETE"
     
    }).then(res => res.json()).then(data => {
      if(data.deletedCount > 0 ){
        refetch()
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
      }
    })
  }
});
}
console.log(cart);

  return (
    <div className='section-container bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%'>
    {/* Banner */}
      <div className="py-36 flex flex-col md:flex-row-reverse items-center justify-center gap-8">
        <div className=" space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Items Added The{" "}
            <span className="text-green">Cart</span>
          </h2>
        </div>
      </div>
      {/* Table */}
      <div className='pb-20'>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-green text-white font-bold rounded-sm '>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index) => (
          <tr>
        <td>{index+1}</td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="image" />
              </div>
            </div>
    
          </div>
        </td>
        <td className='text-black font-medium'>
          {item.name}
        </td>
        <td>{item.quantity} </td>
        <th>
          <td >$ {item.price} </td>
        </th>
        <th className="text-red">
          <FaTrash onClick={() => handleDelete(item)} />
        </th>
      </tr> 
        ))
      }
    </tbody>
  </table>
</div>
      </div>
    <div className='my-12 flex flex-col md:flex-row justify-between items-start'>
      <div className='md:w-1/2 space-y-3 text-semi-bold text-black'>
        <h3 className='font-medium'>Customer Details</h3>
        <p>Name: {user.displayName} </p>
        <p>Email: {user.email}</p>
        <p>User_Id: {user.uid}</p>
      </div>
      <div className='md:w-1/2 space-y-3 pb-5'>
    <h3 className='font-medium text-black'>Shopping Details</h3>
    <p >Total Items: {cart.length} </p>
        <p>Total Price: $0.00</p>
        <button className='btn bg-green text-white'>Procceed Checkout</button>
      </div>
    </div>
    </div>
  )
}

export default CartPage