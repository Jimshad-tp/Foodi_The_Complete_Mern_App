import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';


const UpdateProfile = () => {

  // redirecting to home page or specific page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";


  const {updateUserProfile} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    const name = data.name;
    const photoURL = data.photoURL
    updateUserProfile(name,photoURL)
    // Navigate to Home Page
    navigate(from, { replace: true })
  }
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
    <h3 className='fond-bold'>Update Your Profile Photo</h3>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="name" className="input input-bordered" required {...register("name")} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Upload Photo</span>
        </label>
        <input type="text" {...register("photoURL")}  placeholder="photoURL" className="input input-bordered" required />
        {/* {<input type="file" className="file-input file-input-bordered w-full max-w-xs" />} */}
        <label className="label">
          <a href="#" className="label-text-alt link link-hover"></a>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-green text-white font-bold">Update</button>
      </div>
    </form>
  </div></div>
  )
}

export default UpdateProfile