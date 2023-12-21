import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center max-w-md bg-white shadow-2xl w-full max-auto  my-20">
        <div className="modal-action mt-0 flex flex-col justify-center">
          <form
            className="card-body"
            method="dialog"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-lg  m-2 font-bold">Create a New Account</h3>
            {/* first name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="first-name"
                placeholder="First Name"
                className="input input-bordered"
                {...register("first-name")}
              />
            </div>
            {/* last name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="last-name"
                placeholder="Last Name"
                className="input input-bordered"
                {...register("last-name")}
              />
            </div>
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
              Have an Account?
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="underline m-1 text-red"
              >
                Login
              </button>
            </p>
            <form method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            </form>
          </form>
          <div className="text-center space-x-2 mb-5">
            <button className="btn btn-circle hover:bg-green hover:text-white">
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
      <Modal />
    </div>
  );
};

export default Signup;
