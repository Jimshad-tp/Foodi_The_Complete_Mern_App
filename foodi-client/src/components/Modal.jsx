import React, { useContext, useState } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import { Result } from "postcss";

const Modal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail,login} = useContext(AuthContext)
  const [errorMassage,setErrorMessage] = useState("")

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    // console.log(email,password);
    login(email,password).then((result) => {
      const user = result.user;
      alert("Login successfull")
    }).catch((error) => {
      const errorMassage = error.message
      setErrorMessage("Provide a correct email and password")

    })
  }

  // google sign in
  const handleLogin = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      alert("Login successfull")
    }).catch((error) => console.log(error))
  }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="modal-action mt-0 flex flex-col justify-center">
            <form
              className="card-body"
              method="dialog"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h3 className="text-lg  m-2 font-bold">Please Login..!</h3>
              {/* email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password")}
                />
                <label className="label mt-1">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-green text-white"
                  value="Login"
                  type="submit"
                />
              </div>
              {/* error text */}
         
              {/* login button */}
              <p className="text-center">
                Don't have an account?
                <Link to="/signup" className="underline m-1 text-red">
                  Sign up Now
                </Link>
              </p>
            </form>
            <div className="text-center space-x-2 mb-5">
              <button className="btn btn-circle hover:bg-green hover:text-white" onClick={handleLogin} >
                <FaGoogle />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaFacebook />
              </button>
              <button className="btn btn-circle hover:bg-green hover:text-white">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
